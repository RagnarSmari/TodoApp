import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, Text, View, Button, TextInput,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import NativeModal from 'react-native-modal';
import styles from './styles';
import * as data from '../../resources/data.json';
import AddNewTask from '../AddNewTask';
import CreateTaskModal from '../CreateTaskModal';

const Task = function ({
  name, isFinished, tasks, setTasks, taskId, allTasks,
}) {
  const deleteTask = () => {
    setTasks(allTasks.filter((s) => s.id !== taskId));
  };

  const editTask = () => {
    console.log('saving the edit');
  };
  const [editName, setEditName] = React.useState('');
  const [editingTask, setEditingTask] = useState(false);
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        fillColor="green"
        unfillColor="#FFFFFF"
        text={name}
        iconStyle={{ borderColor: 'gray' }}
        isChecked={isFinished}
        textStyle={{ color: 'black' }}
        style={styles.BCheckbox}
      />
      <View style={styles.EditBtnContainer}>
        <Button
          style={styles.button}
          title="Edit"
          onPress={() => setEditingTask(true)}
        />
      </View>
      <View style={styles.DeleteBtnContainer}>
        <Button
          title="Delete"
          onPress={deleteTask}
        />
      </View>
      <NativeModal
        isVisible={editingTask}
        style={{ backgroundColor: 'white' }}
      >
        <Text>Edit name of task</Text>
        <TextInput
          value={editName}
          onChangeText={(val) => setEditName(val)}
          placeholder="New Name of task"
          keyboardType="default"
        />
        <TouchableOpacity
          onPress={editTask}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </NativeModal>

    </View>
  );
};

const ListAllTasks = function ({
  tasks, setTasks, listId, allTasks,
}) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const renderItem = ({ item }) => (
    <Task name={item.name} isFinished={item.isFinished} tasks={tasks} setTasks={setTasks} taskId={item.id} allTasks={allTasks} />
  );
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={((list) => list.id)}
      />
      <TouchableHighlight
        style={styles.newTaskButton}
        onPress={() => setIsAddModalOpen(true)}
      >
        <Text style={styles.newTaskText}>Create new task</Text>
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
