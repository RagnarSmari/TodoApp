import React from 'react';
import {
  View, Text,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import styles from './styles';
import ListAllBoards from '../../components/ListAllBoards';
import GetAllBoards from '../../services/boardService/boardService';
import CreateBoardButton from '../../components/CreateBoardButton';
// Here is the main view
// Get all the boards and list them

const BoardView = function ({ navigation: { navigate } }) {
  const data = GetAllBoards();
  return (
    <View style={styles.secondContainer}>
      <Text style={styles.main}>My Boards</Text>
      <ListAllBoards boards={data} navigate={navigate} />
      <CreateBoardButton navigate={navigate} />
    </View>
  );
};

BoardView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default BoardView;
