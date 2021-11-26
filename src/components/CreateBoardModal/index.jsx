import React, { useState } from 'react';
import {
  View, Text, Image, TouchableHighlight, TextComponent, TextInput, Button,
} from 'react-native';
import NativeModal from 'react-native-modal';
import PropTypes from 'prop-types';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import photo from '../../../assets/image.png';

const CreateBoardModal = function ({
  isOpen, setIsOpen, boards, setBoards,
}) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
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

  const createBoardObject = () => {
    setIsOpen(false);
    const imgUrl = image;
    const newBoard = {
      id: Math.random() * 98712334,
      name,
      thumbnailPhoto: imgUrl,
      description,
    };
    setBoards([...boards, newBoard]);
  };

  return (
    <NativeModal
      visible={isOpen}
      onRequestClose={() => setIsOpen(false)}
      onDismiss={() => setIsOpen(false)}
      hasBackdrop
      onBackdropPress={() => setIsOpen(false)}
    >
      <View style={styles.container}>
        <View>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
          style={styles.SaveBtn}
          onPress={() => createBoardObject()}
        >
          <Text style={styles.saveBtnText}>Save</Text>
        </TouchableHighlight>
      </View>
    </NativeModal>
  );
};

CreateBoardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
  setBoards: PropTypes.func.isRequired,

};
export default CreateBoardModal;
