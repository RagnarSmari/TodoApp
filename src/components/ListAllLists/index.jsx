import React from 'react';
import { FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import BouncyCheckbox from 'react-native-bouncy-checkbox'; import GetAllTasksByListId from '../../services/taskService/taskService';
import ListAllTasks from '../ListAllTasks';

const List = function ({ name, color, id }) {
  const tasks = GetAllTasksByListId(id);
  return (
    <View style={{ backgroundColor: color }}>
      <Text>{name}</Text>
      <ListAllTasks tasks={tasks} />
    </View>
  );
};

const ListAllLists = function ({ lists }) {
  const renderItem = ({ item }) => (
    <List name={item.name} color={item.color} id={item.id} />
  );
  return (
    <View>
      <FlatList
        data={lists}
        b
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={((list) => list.id)}
      />
    </View>
  );
};

ListAllLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    boardId: PropTypes.number,
  })).isRequired,
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ListAllLists;
