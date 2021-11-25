import React, { useEffect, useState } from 'react';
import {
  View, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ListAllBoards from '../../components/ListAllBoards';
import CreateBoardButton from '../../components/CreateBoardButton';
import Spinner from '../../components/Spinner';
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
  const [loadingBoards, setLoadingBoards] = useState(true);
  // A boolean flag to indicate whether the modal add board is open or not

  //
  const deleteBoard = () => {
    console.log('deleting');
  };

  const updatingBoard = () => {
    console.log('updating');
  };

  useEffect(() => {
    (async () => {
      const myBoards = data.boards;
      setBoards(myBoards);
      setLoadingBoards(false);
    })();
  }, []);

  return (
    <View style={styles.secondContainer}>
      <Text style={styles.main}>My Boards</Text>
      {
            loadingBoards
              ? <Spinner />
              : (
                <ListAllBoards
                  boards={boards}
                  navigate={navigate}
                  deleteBoard={() => deleteBoard()}
                  updatingBoard={() => updatingBoard()}
                  lists={lists}
                  setLists={setLists}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              )
        }
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
