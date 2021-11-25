import React from 'react';
import NativeModal from 'react-native-modal';
import {
  Text, TextInput, TouchableHighlight, View,
} from 'react-native';
import styles from './styles';

const CreateTaskModal = function ({
  isOpen, setIsOpen, tasks, setTasks, listId,
}) {
  const [TaskName, setName] = React.useState('');

  const createNewTask = () => {
    const newTask = {
      id: Math.random() * 100000,
      name: TaskName,
      description: '',
      isFinished: false,
      listId,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <NativeModal
      isVisible={isOpen}
      onRequestClose={() => setIsOpen(false)}
      onDismiss={() => setIsOpen(false)}
      hasBackdrop
    >
      <View style={styles.container}>
        <Text style={styles.text}> New task:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setName(val)}
          value={TaskName}
          placeholder="Enter name"
          keyboardType="default"
        />
        <TouchableHighlight
          onPress={() => createNewTask(listId)}
        >
          <Text>
            Save task
          </Text>
        </TouchableHighlight>
      </View>
    </NativeModal>
  );
};
export default CreateTaskModal;
