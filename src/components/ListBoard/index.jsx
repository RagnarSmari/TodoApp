import React, { useState } from 'react';
import {
  Image, Text, View, TouchableHighlight, TouchableOpacity, Animated, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import NativeModal from 'react-native-modal';
import { Menu } from 'react-native-paper';
import styles from './styles';
import ListAllLists from '../ListAllLists';
import UpdateBoardModal from '../UpdateBoardModal';

const Board = function ({
  title, photo, lists, setLists, tasks, setTasks, boardId, boards, setBoards, allLists,
}) {
  // Deletes a board from the state array

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [updateBoard, setUpdateBoard] = useState(false);
  const [listIsOpen, setListIsOpen] = useState(false);

  const deleteBoard = () => {
    setBoards(boards.filter((item) => item.id !== boardId));
    setIsAddModalOpen(false);
  };
  return (
    <TouchableHighlight
      onPress={() => setListIsOpen(!listIsOpen)}
      onLongPress={() => setIsAddModalOpen(true)}
    >
      <View>
        <Image
          source={{ uri: photo }}
          style={styles.image}
        />
        <Text style={styles.titleStyle}>{title}</Text>
        <>
          <NativeModal
            isVisible={listIsOpen}
            onBackButtonPress={() => setListIsOpen(false)}
            swipeDirection={['right']}
            onSwipeComplete={() => setListIsOpen(false)}
            style={styles.listview}
            propagateSwipe
          >

            <View style={styles.listcontainer}>
              <ListAllLists
                lists={lists}
                setLists={setLists}
                tasks={tasks}
                setTasks={setTasks}
                boardId={boardId}
                allLists={allLists}
              />
            </View>

          </NativeModal>

          <NativeModal
            style={styles.view}
            visible={isAddModalOpen}
            animationIn="slideInUp"
            onRequestClose={() => setIsAddModalOpen(false)}
            onDismiss={() => setIsAddModalOpen(false)}
                // swipeDirection={['down']}
                // onSwipeComplete={setListIsOpen(false)}
            onBackButtonPress={() => setIsAddModalOpen(false)}
            hasBackdrop
            onBackdropPress={() => setIsAddModalOpen(false)}
          >
            <View style={styles.modalView}>
              <TouchableHighlight
                style={styles.UpdateBtn}
                onPress={() => setUpdateBoard(true)}
              >
                <Text>
                  Update Board
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.DeleteBtn}
                onPress={deleteBoard}
              >
                <Text>
                  Delete Board
                </Text>
              </TouchableHighlight>
            </View>
          </NativeModal>
          <UpdateBoardModal
            boardId={boardId}
            setBoards={setBoards}
            boards={boards}
            setUpdateBoard={setUpdateBoard}
            UpdateBoard={updateBoard}
            setModal={setIsAddModalOpen}
          />
        </>
      </View>
    </TouchableHighlight>
  );
};
Board.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Board;
