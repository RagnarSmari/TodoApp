import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import CreateNewListModal from '../CreateNewListModal';
import styles from './styles';

const NewListButton = function ({ lists, setLists, boardId }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsAddModalOpen(true)}
      >
        <Text>Create new list</Text>
      </TouchableOpacity>
      <CreateNewListModal
        isOpen={isAddModalOpen}
        setIsOpen={setIsAddModalOpen}
        lists={lists}
        setLists={setLists}
        boardId={boardId}
      />
    </View>

  );
};

NewListButton.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    boardId: PropTypes.number.isRequired,
  })).isRequired,
  setLists: PropTypes.func.isRequired,
  boardId: PropTypes.number.isRequired,

};

export default NewListButton;
