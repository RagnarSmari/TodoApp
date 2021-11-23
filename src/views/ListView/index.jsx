import React from 'react';
import {
  Text,
} from 'react-native';
// import getAllListsByBoardId from '../../services/listService/listService';
// Here is a view of each board
// Have to somehow get each board and list all the data from it
const ListView = function (boardId) {
  // const allLists = getAllListsByBoardId(boardId);
  return (
    <Text>{boardId}</Text>
  );
};

export default ListView;
