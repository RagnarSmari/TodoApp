import React from 'react';
import NativeModal from 'react-native-modal';
import {
  Text, TextInput, TouchableHighlight, View,
} from 'react-native';
import styles from '../AddNewTask/styles';

const CreateTaskModal = function ({
  isOpen, setIsOpen, tasks, setTasks,
}) {
  const [TaskName, setName] = React.useState('');
  return (
    <NativeModal
      isVisible={isOpen}
      onRequestClose={() => setIsOpen(false)}
      onDismiss={() => setIsOpen(false)}
      hasBackdrop
    >
      <View>
        <Text style={styles.text}> New task:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setName(val)}
          value={TaskName}
          placeholder="Enter name"
          keyboardType="Default"
        />
        <TouchableHighlight>
          <Text>
            Save task
          </Text>
        </TouchableHighlight>
      </View>
    </NativeModal>
  );
};
export default CreateTaskModal;
