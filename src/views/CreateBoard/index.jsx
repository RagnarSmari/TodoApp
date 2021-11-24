import React from 'react';
import {
  Button, Text, TextInput, SafeAreaView, TouchableHighlight, TouchableHighlightComponent,
} from 'react-native';
import styles from './styles';

const CreateBoard = function () {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  return (
    <SafeAreaView>
      <Text style={styles.text}> Name your board:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setName(val)}
        value={name}
        placeholder="Enter name"
      />
      <Text style={styles.text}> Add a description:</Text>

      <TextInput
        style={styles.input}
        onChangeText={(val) => setDescription(val)}
        value={description}
        placeholder="Description(optional)"
      />
      <TouchableHighlight style={styles.addImageBtn}>
        <Text>Add image</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text>Save</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default CreateBoard;
