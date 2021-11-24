import * as data from '../../resources/data.json';

export default function GetAllTasksByListId(id) {
  const allTasks = data.tasks;
  const myLists = allTasks.filter((s) => s.listId === id);
  return myLists;
}
