import React, { useState } from 'react';
import {
  Image, Text, View, TouchableHighlight, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import NativeModal from 'react-native-modal';
import styles from './styles';

const Board = function ({
  title, photo, boardId, navigate, deleteBoard, updatingBoard,
}) {
  // Deletes a board from the state array

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
        <NativeModal
          style={styles.view}
          visible={isAddModalOpen}
          animationIn="slideInUp"
          onRequestClose={() => setIsAddModalOpen(false)}
          onDismiss={() => setIsAddModalOpen(false)}
          // onSwipeComplete={this.close}
          swipeDirection={['down']}
          hasBackdrop

        >
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={updatingBoard}
            >
              <Text style={styles.update}>Update Board</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={deleteBoard}
            >
              <Text>Delete Board</Text>
            </TouchableOpacity>
          </View>
        </NativeModal>
      </View>
    </TouchableHighlight>
  );
};
Board.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  boardId: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
  updatingBoard: PropTypes.func.isRequired,
};

export default Board;
