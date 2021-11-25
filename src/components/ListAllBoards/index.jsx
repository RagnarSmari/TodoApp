import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Board from '../ListBoard';
// Get the data from the resources

const ListAllBoards = function ({
  boards, navigate, deleteBoard, updatingBoard,
}) {
  const renderItem = ({ item }) => (
    <Board
      photo={item.thumbnailPhoto}
      title={item.name}
      boardId={item.id}
      navigate={navigate}
      deleteBoard={deleteBoard}
      updatingBoard={updatingBoard}
    />
  );
  return (
    <View>
      <FlatList
        data={boards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

ListAllBoards.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnailPhoto: PropTypes.string,
  })).isRequired,
  navigate: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
};
export default ListAllBoards;
