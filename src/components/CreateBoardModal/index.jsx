import React from 'react';
import {
  View, Text, Image, TouchableHighlight, TextComponent, TextInput,
} from 'react-native';
import NativeModal from 'react-native-modal';
import PropTypes from 'prop-types';
import styles from './styles';
import photo from '../../../assets/image.png';

const CreateBoardModal = function ({
  isOpen, setIsOpen, boards, setBoards,
}) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const createBoardObject = () => {
    const imgUrl = 'https://i.pinimg.com/474x/45/11/c5/4511c5871ff8011385b023be70878d81.jpg';
    const id = boards.length + 1;
    const newBoard = {
      id,
      name,
      thumbnailPhoto: imgUrl,
    };
    setBoards([...boards, newBoard]);
  };

  return (
    <NativeModal
      visible={isOpen}
      onRequestClose={() => setIsOpen(false)}
      onDismiss={() => setIsOpen(false)}
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
          onPress={() => createBoardObject()}
        >
          <Text>Save</Text>
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
