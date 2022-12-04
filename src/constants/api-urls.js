export const ApiUrls = {
    //authentication: "~/rest/auth/1/session",
    getAllProjects: "~/rest/api/2/project",
    search: "~/rest/api/2/search",
    createIssue: "~/rest/api/2/issue/",
    cloneIssue: "~/rest/internal/2/issue/{0}/clone",
    taskStatus: "~/rest/api/3/task/{0}",
    bulkImportIssue: "~/rest/api/2/issue/bulk",
    getProjectImportMetadata: "~/rest/api/2/issue/createmeta?expand=projects.issuetypes.fields&projectKeys=",
    getProjectStatuses: "~/rest/api/2/project/{0}/statuses",
    getIssueMetadata: "~/rest/api/2/issue/{0}/editmeta",
    individualIssue: "~/rest/api/2/issue/{0}",
    getAllIssueTypes: "~/rest/api/2/issuetype",
    addIssueWorklog: "~/rest/api/2/issue/{0}/worklog?adjustEstimate=AUTO",
    issueWorklog: "~/rest/api/2/issue/{0}/worklog",
    updateIndividualWorklog: "~/rest/api/2/issue/{0}/worklog/{1}?adjustEstimate=AUTO",
    individualWorklog: "~/rest/api/2/issue/{0}/worklog/{1}",
    searchUser: "~/rest/api/2/user/search?maxResults={1}&startAt={2}&query={0}",
    searchUser_Alt: "~/rest/api/2/user/search?maxResults={1}&startAt={2}&username={0}",
    searchGroup: "~/rest/api/2/groups/picker?maxResults={1}&query={0}",
    searchIssueForPicker: "~/rest/api/2/issue/picker",
    getGroupMembers: "~/rest/api/2/group/member?maxResults={1}&includeInactiveUsers=true&groupId={0}",
    getCustomFields: "~/rest/api/2/field",
    getJQLAutocomplete: "~/rest/api/2/jql/autocompletedata",
    getJQLSuggestions: "~/rest/api/2/jql/autocompletedata/suggestions",
    getUserDetails: "~/rest/api/2/user?username={0}",
    mySelf: "~/rest/api/2/myself",
    //usersForPicker: "~/rest/api/2/user/picker?maxResults=10&showAvatar=true&username={0}&query={0}",
    rapidSprintList: "~/rest/greenhopper/1.0/sprintquery/{0}",
    rapidSprintDetails: "~/rest/greenhopper/1.0/rapid/charts/sprintreport?rapidViewId={0}&sprintId={1}",
    sprintListAll: "~/rest/greenhopper/1.0/integration/teamcalendars/sprint/list?jql=project+in+({0})",
    sprintListOpen: "~/rest/greenhopper/1.0/integration/teamcalendars/sprint/list?jql=project+in+({0})+and+Sprint+not+in+closedSprints()",
    getSprintIssues: "~/rest/agile/1.0/sprint/{0}/issue",
    rapidViews: "~/rest/greenhopper/1.0/rapidview",
    scrumBoards: "~/rest/agile/1.0/board?maxResults=100&orderBy=name&type=scrum",
    sprintListByBoard: "~/rest/agile/1.0/board/{0}/sprint?state=active,closed",
    burndownChart: "~/rest/greenhopper/1.0/rapid/charts/scopechangeburndownchart.json?rapidViewId={0}&sprintId={1}",
    googleLogoutUrl: "https://accounts.google.com/o/oauth2/revoke?token={0}",
    outlookLogoutUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/logout"
};