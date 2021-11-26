import React from 'react';
import NativeModal from 'react-native-modal';
import {
  Text, TextInput, TouchableHighlight, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CreateNewListModal = function ({
  isOpen, setIsOpen, lists, setLists, boardId,
}) {
  const [ListName, setName] = React.useState('');
  const [color, setColor] = React.useState('red');

  const createNewList = () => {
    const bId = boardId;
    const newList = {
      id: Math.random() * 10000,
      name: ListName,
      color,
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
        <View />
        <View style={[styles.addColorBtn, { backgroundColor: color }]} />
        <View style={styles.ColorContainer}>
          <TouchableOpacity onPress={() => setColor('red')}>
            <View style={[styles.box, { backgroundColor: 'red' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setColor('orange')}>
            <View style={[styles.box, { backgroundColor: 'orange' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setColor('mediumseagreen')}>
            <View style={[styles.box, { backgroundColor: 'mediumseagreen' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setColor('deepskyblue')}>
            <View style={[styles.box, { backgroundColor: 'deepskyblue' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setColor('mediumturquoise')}>
            <View style={[styles.box, { backgroundColor: 'mediumturquoise' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setColor('mediumslateblue')}>
            <View style={[styles.box, { backgroundColor: 'mediumslateblue' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setColor('purple')}>
            <View style={[styles.box, { backgroundColor: 'purple' }]} />
          </TouchableOpacity>
        </View>

        {/* <TouchableHighlight style={styles.addColorBtn}> */}
        {/*  <Text> */}
        {/*    Add color */}
        {/*  </Text> */}
        {/* </TouchableHighlight> */}
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
