import React from 'react';
import {
  Text, TextInput, View, TouchableHighlight,
} from 'react-native';
import styles from './styles';

const CreateBoard = function () {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Name your board:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setName(val)}
        value={name}
        placeholder="Enter name"
        keyboardType="number-pad"
      />
      <Text style={styles.text}> Add a description:</Text>

      <TextInput
        style={styles.input}
        onChangeText={(val) => setDescription(val)}
        value={description}
        placeholder="Description(optional)"
        keyboardType="number-pad"
      />
      <TouchableHighlight style={styles.addImageBtn}>
        <Text>  Add image</Text>
      </TouchableHighlight>

    </View>
  );
};

export default CreateBoard;
