import React, { useEffect, useState } from 'react';
import {
  View, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ListAllBoards from '../../components/ListAllBoards';
import CreateBoardButton from '../../components/CreateBoardButton';
import * as data from '../../resources/data.json';
// Here is the main view
// Get all the boards and list them

const BoardView = function ({ navigation: { navigate } }) {
  // All boards within the BoardView
  const [boards, setBoards] = useState([]);
  // All lists within the application
  const [lists, setLists] = useState([]);
  // All tasks within the application
  const [tasks, setTasks] = useState([]);
  // A boolean flag to indicate whether the images are being loaded or not

  useEffect(() => {
    (async () => {
      const myBoards = data.boards;
      const myLists = data.lists;
      const myTasks = data.tasks;
      setBoards(myBoards);
      setTasks(myTasks);
      setLists(myLists);
    })();
  }, []);

  return (
    <View style={styles.secondContainer}>
      <Text style={styles.main}>My Boards</Text>
      <ListAllBoards
        boards={boards}
        navigate={navigate}
        lists={lists}
        setLists={setLists}
        tasks={tasks}
        setTasks={setTasks}
        setBoards={setBoards}
      />
      <CreateBoardButton boards={boards} setBoards={setBoards} />
    </View>

  );
};

BoardView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default BoardView;
