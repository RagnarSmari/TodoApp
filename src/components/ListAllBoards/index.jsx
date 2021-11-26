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
  boards, navigate, lists, setLists, tasks, setTasks, setBoards,
}) {
  const renderItem = ({ item }) => {
    const myLists = lists.filter((s) => s.boardId === item.id);
    return (
      <Board
        photo={item.thumbnailPhoto}
        title={item.name}
        lists={myLists}
        setLists={setLists}
        tasks={tasks}
        setTasks={setTasks}
        boardId={item.id}
        boards={boards}
        setBoards={setBoards}
        allLists={lists}
      />
    );
  };
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
};
export default ListAllBoards;
