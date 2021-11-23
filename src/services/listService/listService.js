import * as data from '../../resources/data.json';

export default function getAllListsByBoardId(id) {
  const allLists = data.lists;
  const myBoards = allLists.map(allLists.boardId === id);
  return myBoards;
}
