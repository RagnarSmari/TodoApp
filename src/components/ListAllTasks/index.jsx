import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './styles';

const Task = function ({ name, isFinished }) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text={name}
        iconStyle={{ borderColor: 'blue' }}
        isChecked={isFinished}
        textStyle={{ color: 'black' }}
        style={styles.BCheckbox}
      />
      <Text>Edit</Text>
      <Text> Delete</Text>
    </View>
  );
};

const ListAllTasks = function ({ tasks }) {
  const renderItem = ({ item }) => (
    <Task name={item.name} description={item.description} isFinished={item.isFinished} />
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
  isFinished: PropTypes.bool.isRequired,
};

export default ListAllTasks;
