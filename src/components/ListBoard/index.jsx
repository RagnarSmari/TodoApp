import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../ListAllBoards/styles';

const boardMenu = ({ boardId }) => {
  console.log(boardId);
};

const Board = function ({
  title, photo, boardId, navigate,
}) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <TouchableHighlight
      onPress={() => navigate('ListView', {
        boardId,
      })}
      onLongPress={() => boardMenu({ boardId })}
    >
      <View>
        <Image
          source={{ uri: photo }}
          style={styles.image}
        />
        <Text>{title}</Text>
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

boardMenu.propTypes = {
  boardId: PropTypes.number.isRequired,
};
export default Board;
