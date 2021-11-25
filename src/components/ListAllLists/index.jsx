import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import ListAllTasks from '../ListAllTasks';
import * as data from '../../resources/data.json';

import NewListButton from '../NewListButton';

const List = function ({ name, color, id }) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const tasks = data.tasks.filter((s) => s.listId === id);
    setTasks(tasks);
  });
  return (
    <View style={{ backgroundColor: color }}>
      <Text>{name}</Text>
      <ListAllTasks tasks={tasks} setTasks={setTasks} />
    </View>
  );
};

// eslint-disable-next-line react/prop-types
const ListAllLists = function ({ lists, setLists, listLength }) {
  const renderItem = ({ item }) => (
    <List name={item.name} color={item.color} id={item.id} />
  );
  return (
    <View>
      <FlatList
        data={lists}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={((list) => list.id)}
      />
      <NewListButton lists={lists} setLists={setLists} listLength={listLength} />
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
  listLength: PropTypes.number.isRequired,
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ListAllLists;
