import React from 'react';
import NativeModal from 'react-native-modal';
import {
  Text, TextInput, TouchableHighlight, View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CreateNewListModal = function ({
  isOpen, setIsOpen, lists, setLists, boardId,
}) {
  const [ListName, setName] = React.useState('');

  const createNewList = () => {
    const bId = boardId;
    const newList = {
      id: Math.random() * 10000,
      name: ListName,
      color: '#00ff00',
      boardId: bId,
    };
    setLists([...lists, newList]);
  };

  return (
    <NativeModal
      isVisible={isOpen}
      onRequestClose={() => setIsOpen(false)}
      onDismiss={() => setIsOpen(false)}
      hasBackdrop
      onBackdropPress={() => setIsOpen(false)}
    >
      <View style={styles.container}>
        <Text style={styles.text}> New list:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setName(val)}
          value={ListName}
          placeholder="Enter name"
          keyboardType="default"
        />
        <TouchableHighlight style={styles.addColorBtn}>
          <Text>
            Add color
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.saveLaskBtn}
          onPress={() => createNewList()}
        >
          <Text style={styles.saveText}>
            Save list
          </Text>
        </TouchableHighlight>
      </View>
    </NativeModal>
  );
};

CreateNewListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    boardId: PropTypes.number.isRequired,
  })).isRequired,
  setLists: PropTypes.func.isRequired,
};

export default CreateNewListModal;
