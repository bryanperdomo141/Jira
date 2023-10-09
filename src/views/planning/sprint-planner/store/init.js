import moment from 'moment';
import { inject } from "../../../../services/injector-service";
import { getUserName } from '../../../../common/utils';
import { getDaysListBasedOnSprints } from './utils';
import { getEpicDetailsForSprints } from './epic-helper';

const unassignedUser = '--UNASSIGNED--';
//const unassignedUserObj = { displayName: '-- UNASSIGNED ISSUES --' };

export async function loadSprintsList(boardId, setState, getState) {
    const { $jira } = inject('JiraService');

    setState({ loading: true });

    const state = getState();

    // Get list of sprints from Jira based on board
    const sprintLists = await $jira.getRapidSprintList([boardId], { state: 'future,active', sortDesc: false });
    const daysList = getDaysListBasedOnSprints(sprintLists, state.workingDays);

    const {
        columnConfig,
        estimation: { field: estimation = {} } = {}
    } = await $jira.getBoardConfig(boardId);

    // Create user and story map
    // Create new users if story is assigned
    let { resources } = state;
    resources = resources ? [...resources] : [];

    // Pull the list of issues based on sprint
    const sprintMap = sprintLists.reduce((obj, sp) => {
        obj[sp.id] = sp;
        return obj;
    }, {});

    const issueDetails = await getSprintIssueDetails(sprintLists, resources, estimation, setState);

    // Intentionally did not use await as this data is not immediately necessary
    getEpicDetailsForSprints(issueDetails.sprintWiseIssues, sprintLists, issueDetails.epicNameField).then(setState);

    // Sprint list is sorted in asc order based on param passed
    // Take start and end date for planning based on first and last sprint
    const planStartDate = moment(sprintLists[0]?.startDate || new Date()).startOf('day').toDate();
    const planEndDate = moment(sprintLists[sprintLists.length - 1]?.endDate || moment().add(2, 'weeks'))
        .endOf('day').add(5, 'days').toDate();

    const velocityInfo = await computeAverageSprintVelocity(boardId, state, estimation.fieldId, $jira);

    const newState = {
        loading: false,
        columnConfig, estimation,
        sprintLists, sprintMap, daysList,
        resources,
        planStartDate, planEndDate,
        velocityInfo,
        ...issueDetails
    };

    preparePlanningData(newState, state);

    // Update state with all the objects
    setState(newState);
}

async function getSprintIssueDetails(sprintLists, resources, estimation) {
    const sprintIds = sprintLists.map(({ id }) => id);

    const { $session } = inject('SessionService');
    const { epicNameField } = $session.CurrentUser;
    if (!sprintIds.length) {
        return { epicNameField };
    }

    const sprintWiseIssues = await getSprintWiseIssuesList(sprintIds, epicNameField, estimation);

    const issueMaps = mapIssues(sprintWiseIssues, resources);

    return { sprintWiseIssues, epicNameField, ...issueMaps };
}

async function getSprintWiseIssuesList(sprintIds, epicNameField, estimation) {
    const { $jira } = inject('JiraService');

    const customFields = await $jira.getCustomFields();
    const sprintFieldName = customFields.filter(f => f.name.toLowerCase() === 'sprint')[0];

    const results = await $jira.searchTickets(`sprint in (${sprintIds.join(',')})`,
        [
            'summary', 'issuetype', 'priority', 'status',
            'assignee', 'parent', 'subtask', sprintFieldName.id,
            epicNameField?.id, estimation.fieldId
        ], 0,
        { properties: 'ja_planner_tasks' }
    );

    return results.reduce((map, issue) => {
        const { [sprintFieldName.id]: sprint } = issue.fields;
        const { id: sprintId } = sprint[sprint.length - 1];
        let sprintWiseIssues = map[sprintId];
        if (!sprintWiseIssues) {
            sprintWiseIssues = [issue];
            map[sprintId] = sprintWiseIssues;
        } else {
            sprintWiseIssues.push(issue);
        }

        return map;
    }, {});
}

function getUserStoryMap(resources) {
    return resources?.reduce((map, u) => {
        map[u.id] = [];
        return map;
    }, { [unassignedUser]: [] });
}

function mapIssues(sprintWiseIssues, resources) {
    const userStoryMap = getUserStoryMap(resources);

    const issuesMap = Object.keys(sprintWiseIssues).reduce((obj, sid, index) => {
        sprintWiseIssues[sid].forEach((issue) => {
            const { key, fields: { assignee } } = issue;
            const uName = getUserName(assignee);

            obj[key] = { assignee: uName, sprintId: sid, issue };

            if (uName) {
                if (!userStoryMap[uName]) {
                    resources.push({ ...assignee, id: uName });
                    userStoryMap[uName] = [];
                }
                userStoryMap[uName].push(key);
            } else {
                userStoryMap[unassignedUser].push(key);
            }
        });

        return obj;
    }, {});

    return { issuesMap, userStoryMap };
}


//#region Private functions
async function computeAverageSprintVelocity(boardId, { settings: { noOfSprintsForVelocity } }, storypointFieldName, $jira) {
    const closedSprintLists = await $jira.getRapidSprintList([boardId], { state: 'closed', maxResults: noOfSprintsForVelocity });
    const availableSprintCount = closedSprintLists.length;

    if (!availableSprintCount) {
        return { closedSprintLists, averageComitted: 0, averageCompleted: 0 };
    }

    const sprintIds = closedSprintLists.map(({ id }) => id);
    const storyPointFieldForQuery = storypointFieldName.startsWith('customfield_')
        ? `cf[${storypointFieldName.split('_')[1]}]`
        : storypointFieldName;

    const sprintWiseIssues = await $jira.getSprintIssues(sprintIds, {
        jql: `${storyPointFieldForQuery} > 0`,
        fields: ['resolutiondate', storypointFieldName]
    });

    closedSprintLists.forEach(sprint => {
        const completeDate = moment(sprint.completeDate);
        const issues = sprintWiseIssues[sprint.id];

        sprint.comittedStoryPoints = 0;
        sprint.completedStoryPoints = 0;

        issues.forEach(issue => {
            const { resolutiondate, [storypointFieldName]: storypoint } = issue.fields;

            if (resolutiondate && moment(resolutiondate).isBefore(completeDate)) {
                sprint.completedStoryPoints += storypoint;
            }

            sprint.comittedStoryPoints += storypoint;
        });
    });

    const averageComitted = Math.round(closedSprintLists.sum(s => s.comittedStoryPoints) / closedSprintLists.length);
    const averageCompleted = Math.round(closedSprintLists.sum(s => s.completedStoryPoints) / closedSprintLists.length);

    return { closedSprintLists, averageComitted, averageCompleted };
}

function preparePlanningData(newState, allState) {
    const { sprintLists, sprintWiseIssues,
        columnConfig: { columns },
        estimation: { fieldId: storyPointField } = {},

    } = newState;
    const { settings: { hoursPerStoryPoint, workHours } } = allState;

    const progCols = columns.slice(1, -1);
    const result = [];
    for (let i = 0; i < sprintLists.length; i++) {
        const { id: sprintId, startDate } = sprintLists[i];
        const issues = sprintWiseIssues[sprintId];

        issues.forEach(issue => {
            const { key } = issue;
            const userId = null;
            const storyPoint = issue.fields[storyPointField] || 1;
            const totalHours = storyPoint * hoursPerStoryPoint;
            const totalDays = Math.ceil(totalHours / workHours);
            const _55Perc = totalDays * 55 / 100;
            const _remaining = totalDays - _55Perc;

            let prevEndDate = startDate;
            const child = progCols.map((c, i) => {
                const duration = i === 0 ? _55Perc : _remaining / (progCols.length - 1);
                const res = {
                    rowType: 'status',
                    id: `${key}_${c.name}`,
                    source: c, startDate: prevEndDate,
                    duration, progress: 100,
                    isManual: true
                };

                prevEndDate = moment(res.startDate)
                    .add(duration + 1, 'days')
                    .startOf('day').toDate();

                return res;
            });

            result.push({
                rowType: 'task', id: key, userId, sprintId,
                summary: issue.fields.summary,
                source: issue,
                child
            });
        });
    }
    newState.planningData = result;
    console.log('newState.planningData=', newState.planningData);
}

/*
function preparePlanningData(newState) {
    const { sprintMap, userList, userStoryMap, issuesMap } = newState;

    const getUserRow = (userId, user) => {
        const stories = userStoryMap[userId];
        const segments = {};

        const child = stories.map(key => {
            const { sprintId, issue } = issuesMap[key];
            const { startDate, endDate } = sprintMap[sprintId];
            if (!segments[sprintId]) {
                segments[sprintId] = { startDate, duration: moment(endDate).diff(startDate, 'days') };
            }

            return {
                rowType: 'task', id: key, userId, sprintId,
                source: issue, startDate,
                duration: 4, progress: 55
            };
        });

        return { rowType: 'user', id: userId, source: user, child, segments: Object.values(segments) };
    };

    newState.planningData = userList.map(u => {
        const userId = getUserName(u);
        return getUserRow(userId, u);
    });
    console.log('newState.planningData=', newState.planningData);
    newState.planningData.push(getUserRow(unassignedUser, unassignedUserObj));
}*/
//#endregion