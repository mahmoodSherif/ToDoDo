let id = 0;

export let lists = {};

// let keys = {
//     TASK_ID: 'taskId',
//     SUB_TASK_ID: 'subTaskId',
//     LIST_ID: 'listId',
//     LIST: 'list',
// };

export function genTaskId() {
    return id++;
}

export function genSubTaskId() {
    return id++;
}

export function genListId() {
    return id++;
}

// export function save() {
//     localStorage.setItem(keys.TASK_ID, JSON.stringify(taskId));
//     localStorage.setItem(keys.SUB_TASK_ID, JSON.stringify(subTaskId));
//     localStorage.setItem(keys.LIST_ID, JSON.stringify(listId));
//     localStorage.setItem(keys.LIST, JSON.stringify(lists));
// }

// export function load() {
//     if (!localStorage.getItem(keys.LIST)) {
//         return;
//     }
//     taskId = JSON.parse(localStorage.getItem(keys.TASK_ID));
//     subTaskId = JSON.parse(localStorage.getItem(keys.SUB_TASK_ID));
//     listId = JSON.parse(localStorage.getItem(keys.LIST_ID));
//     lists = JSON.parse(localStorage.getItem(keys.LIST));
//     console.log(`gamed ${taskId}\n`);
// }
