import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, View } from 'react-native';

const Task = function ({ name, description }) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const ListAllTasks = function ({ tasks }) {
  const renderItem = ({ item }) => (
    <Task name={item.name} description={item.description} />
  );
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={((list) => list.id)}
      />
    </View>
  );
};

ListAllTasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    isFinished: PropTypes.bool,
    listId: PropTypes.number,

  })).isRequired,
};

Task.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListAllTasks;
