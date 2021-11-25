import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {
  Image, Text, View, Modal, Alert, ViewComponent, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../ListAllBoards/styles';
import AddModal from '../AddModal';

const menuOpen = () => {

};

const Board = function ({
  title, photo, boardId, navigate,
}) {
  // Deletes a board from the state array
  const deleteBoard = () => {
    console.log('deleting board');
    // setLoadingBoards(true);
    // setSelectedBoards([]);
    // setBoards(boards.filter((board) => selectedBoard.remove(board)));
    // setLoadingBoards(false);
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <TouchableHighlight
      onPress={() => navigate('ListView', {
        boardId,
      })}
      onLongPress={() => setIsAddModalOpen(true)}
    >
      <View>
        <Image
          source={{ uri: photo }}
          style={styles.image}
        />
        <Text>{title}</Text>
        <View style={styles.mView}>
          <Modal
            visible={isAddModalOpen}
            transparent
            onRequestClose={() => setIsAddModalOpen(false)}
            style={styles.modalView}
            onDismiss={() => setIsAddModalOpen(false)}
          >
            <View style={styles.modalView}>
              <TouchableOpacity>
                <Text>Update Board</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteBoard()}
              >
                <Text>Delete Board</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    </TouchableHighlight>
  );
};
Board.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  boardId: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Board;
