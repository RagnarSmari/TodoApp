import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import * as data from '../../resources/data.json';
import AddNewTask from '../AddNewTask';
import CreateTaskModal from '../CreateTaskModal';

const Task = function ({
  name, isFinished, tasks, setTasks, taskId,
}) {
  const deleteTask = () => {
    console.log('deleting task');
  };

  const editTask = () => {
    console.log('editing task');
  };
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
      <TouchableOpacity
        onPress={editTask}
      >
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableHighlight
        onPress={deleteTask}
      >
        <Text> Delete</Text>
      </TouchableHighlight>

    </View>
  );
};

const ListAllTasks = function ({ tasks, setTasks, listId }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const renderItem = ({ item }) => (
    <Task name={item.name} isFinished={item.isFinished} tasks={tasks} setTasks={setTasks} taskId={item.id} />
  );
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={((list) => list.id)}
      />
      <TouchableHighlight
        onPress={() => setIsAddModalOpen(true)}
      >
        <Text>Create new task</Text>
      </TouchableHighlight>
      <CreateTaskModal
        isOpen={isAddModalOpen}
        setIsOpen={setIsAddModalOpen}
        tasks={tasks}
        setTasks={setTasks}
        listId={listId}
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
  setTasks: PropTypes.func.isRequired,
};

Task.propTypes = {
  name: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
};

export default ListAllTasks;
