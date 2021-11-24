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
  // All images within the BoardView
  const [boards, setBoards] = useState([]);
  // All selected boards
  const [selectedBoard, setSelectedBoards] = useState([]);
  // A boolean flag to indicate whether the images are being loaded or not
  const [loadingBoards, setLoadingBoards] = useState(true);
  // A boolean flag to indicate whether the modal add board is open or not
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // const addBoard = (board) => {
  //     setLoadingBoards(true);
  //     const newBoard = await CreateBoard(board);
  //     setBoards([...boards, newBoard]);
  //     setLoadingBoards(false);
  // }

  // Deletes a board from the state array
  const deleteBoard = () => {
    setLoadingBoards(true);
    setSelectedBoards([]);
    setBoards(boards.filter((board) => selectedBoard.remove(board)));
    setLoadingBoards(false);
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
                <ListAllBoards boards={boards} navigate={navigate} />
              )
        }
      <CreateBoardButton navigate={navigate} />
    </View>
  );
};

BoardView.navigationOptions = (_) => ({
  title: 'BoardView',
});

BoardView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default BoardView;
