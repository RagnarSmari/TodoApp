import * as data from '../../resources/data.json';

export default function getAllListsByBoardId(id) {
  const allLists = data.lists;
  const myBoards = allLists.filter((s) => s.boardId === id);
  return myBoards;
}
