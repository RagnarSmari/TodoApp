import React from 'react';
import { Text } from 'react-native-paper';
import NativeModal from 'react-native-modal';
import {
  Image, TextInput, TouchableHighlight, View,
} from 'react-native';
import styles from '../CreateBoardModal/styles';
import photo from '../../../assets/image.png';

const UpdateBoardModal = function ({
  boardId, boards, setBoards, UpdateBoard, setUpdateBoard,
}) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const updateBoard = () => {
    console.log('updating');
  };
  return (
    <NativeModal
      visible={UpdateBoard}
      onRequestClose={() => setUpdateBoard(false)}
      onDismiss={() => setUpdateBoard(false)}
      hasBackdrop
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableHighlight style={styles.addImageBtn}>
            <Image style={styles.addIcon} source={photo} />
          </TouchableHighlight>
        </View>
        <Text style={styles.text}> Name your board:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setName(val)}
          value={name}
          placeholder="Enter name"
          keyboardType="default"
        />
        <Text style={styles.text}> Add a description:</Text>

        <TextInput
          style={styles.input}
          onChangeText={(val) => setDescription(val)}
          value={description}
          placeholder="Description(optional)"
          keyboardType="default"
        />
        <TouchableHighlight
          onPress={() => updateBoard()}
        >
          <Text>Save</Text>
        </TouchableHighlight>
      </View>
    </NativeModal>
  );
};

export default UpdateBoardModal;
