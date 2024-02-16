import { inject } from "src/services";

export async function getSprintWiseSayDoRatio({ sprintBoards, noOfSprints, velocitySprints }) {
    const { $sprint, $session } = inject('SprintService', 'SessionService');
    const result = [];
    const storyPointField = $session.CurrentUser.storyPointField?.id;
    for (const { id, name } of sprintBoards) {
        const { closedSprintLists, averageCommitted, averageCompleted, sayDoRatio } = await $sprint.computeAverageSprintVelocity(id, velocitySprints, storyPointField, noOfSprints + velocitySprints);

        const sprintList = closedSprintLists.slice(-noOfSprints);
        while (sprintList.length < noOfSprints) {
            sprintList.splice(0, 0, null);
        }
        result.push({ id, name, sprintList, averageCommitted, averageCompleted, sayDoRatio });
    }
    return result;
}