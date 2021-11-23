import React from 'react';
import {
  View, Text,
} from 'react-native';
import styles from './styles';
import ListAllBoards from '../../components/ListAllBoards';
import GetAllBoards from '../../services/boardService/boardService';
import CreateBoardButton from '../../components/CreateBoardButton';
// Here is the main view
// Get all the boards and list them

const BoardView = function () {
  const data = GetAllBoards();
  // Add button below ListAllBoards
  return (
    <View style={styles.secondContainer}>
      <Text style={styles.main}>My Boards</Text>
      <ListAllBoards boards={data} />
      <CreateBoardButton />
    </View>
  );
};

export default BoardView;
