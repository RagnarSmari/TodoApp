import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import ListAllTasks from '../ListAllTasks';

import NewListButton from '../NewListButton';

const List = function ({
  // eslint-disable-next-line react/prop-types
  name, color, tasks, setTasks, lists, setLists, listId,
}) {
  return (
    <View style={{ backgroundColor: color }}>
      <Text>{name}</Text>
      <ListAllTasks tasks={tasks} setTasks={setTasks} listId={listId} />
    </View>
  );
};

// eslint-disable-next-line react/prop-types
const ListAllLists = function ({
  // eslint-disable-next-line react/prop-types
  lists, setLists, tasks, setTasks, boardId,
}) {
  const renderItem = ({ item }) => {
    const listTasks = tasks.filter((s) => s.listId === item.id);
    return (
      <List
        name={item.name}
        color={item.color}
        tasks={listTasks}
        setTasks={setTasks}
        listId={item.id}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={lists}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={((list) => list.id)}
      />
      <NewListButton lists={lists} setLists={setLists} />
    </View>
  );
};

ListAllLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
  })).isRequired,
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ListAllLists;
