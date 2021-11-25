import React from 'react';
import {
  Text, TextInput, View, TouchableHighlight,
} from 'react-native';
import styles from './styles';

const AddNewTask = function () {
  const [TaskName, setName] = React.useState('');
  return (
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

  );
};

export default AddNewTask;
