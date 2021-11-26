import React, { useState } from 'react';
import { Text } from 'react-native-paper';
import NativeModal from 'react-native-modal';
import {
  Button,
  Image, TextInput, TouchableHighlight, View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../CreateBoardModal/styles';
import photo from '../../../assets/image.png';

const UpdateBoardModal = function ({
  boardId, boards, setBoards, UpdateBoard, setUpdateBoard, setModal,
}) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const myBoard = boards.filter(((s) => s.id === boardId));
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result.uri);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const updateBoard = () => {
    const allBoards = boards;
    const ind = boards.findIndex(((s) => s.id === boardId));
    allBoards[ind].name = name;
    allBoards[ind].thumbnailPhoto = image;

    setBoards(allBoards);
    setBoards([...boards]);
    setUpdateBoard(false);
    setModal(false);
  };
  return (
    <NativeModal
      visible={UpdateBoard}
      onRequestClose={() => setUpdateBoard(false)}
      onDismiss={() => setUpdateBoard(false)}
      hasBackdrop
    >
      <View style={styles.container}>
        <Text>
          Updating
        </Text>
        <Text>{myBoard.name}</Text>
        <View style={styles.imageContainer}>
          <TouchableHighlight style={styles.addImageBtn}>
            <View>
              <Button title="Pick an image from camera roll" onPress={pickImage} />
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
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
