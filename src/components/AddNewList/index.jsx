import React from 'react';
import {
  Text, TextInput, View, TouchableHighlight,
} from 'react-native';
import styles from './styles';

const AddNewList = function () {
  const [ListName, setName] = React.useState('');

  return (
    <View>
      <Text style={styles.text}> New list:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setName(val)}
        value={ListName}
        placeholder="Enter name"
        keyboardType="Default"
      />
      <TouchableHighlight>
        <Text>
          Add color
        </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text>
          Save list
        </Text>
      </TouchableHighlight>
    </View>

  );
};

export default AddNewList;
