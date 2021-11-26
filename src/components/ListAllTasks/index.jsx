import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, Text, View, Button, TextInput, TouchableOpacity, TouchableHighlight,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import NativeModal from 'react-native-modal';
import styles from './styles';
import * as data from '../../resources/data.json';
import AddNewTask from '../AddNewTask';
import CreateTaskModal from '../CreateTaskModal';

const Task = function ({
  name, isFinished, tasks, setTasks, taskId, allTasks, description,
}) {
  const [editName, setEditName] = React.useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editingTask, setEditingTask] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const deleteTask = () => {
    setTasks(allTasks.filter((s) => s.id !== taskId));
  };

  const editTask = () => {
    setEditingTask(false);
    const newArr = allTasks;
    const ind = allTasks.findIndex((s) => s.id === taskId);
    newArr[ind].name = editName;
    newArr[ind].description = editDescription;
    setTasks(newArr);
    setTasks([...newArr]);
  };

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
      <View style={styles.BtnContainer}>
        <View style={styles.DeleteBtnContainer}>
          <TouchableOpacity onPress={deleteTask}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.EditBtnContainer}>
          <TouchableOpacity onPress={() => setEditingTask(true)}>
            <Text>Edit    </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => setShowDescription(true)}>
            <Text>Show Description    </Text>
          </TouchableOpacity>
        </View>
        <NativeModal
          isVisible={showDescription}
          style={{ backgroundColor: 'white' }}
          onRequestClose={() => setShowDescription(false)}
        >
          <Button
            title="close"
            onPress={() => setShowDescription(false)}
          />
          <Text>{description}</Text>
        </NativeModal>
      </View>
      <NativeModal
        isVisible={editingTask}
        style={{ backgroundColor: 'white' }}
        onRequestClose={() => setEditingTask(false)}
      >
        <Button
          title="CLose"
          onPress={() => setEditingTask(false)}
        />
        <Text>Edit name of task</Text>
        <TextInput
          value={editName}
          onChangeText={(val) => setEditName(val)}
          placeholder="New Name of task"
          keyboardType="default"
        />
        <Text>Edit description of task</Text>
        <TextInput
          value={editDescription}
          onChangeText={(val) => setEditDescription(val)}
          placeholder="New description of task"
          keyboardType="default"
        />
        <Button
          title="Save"
          onPress={editTask}
        />

      </NativeModal>

    </View>
  );
};

const ListAllTasks = function ({
  tasks, setTasks, listId, allTasks,
}) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const renderItem = ({ item }) => (
    <Task
      name={item.name}
      isFinished={item.isFinished}
      tasks={tasks}
      setTasks={setTasks}
      taskId={item.id}
      allTasks={allTasks}
      description={item.description}
    />
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
        tasks={allTasks}
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
