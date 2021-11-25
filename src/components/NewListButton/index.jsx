import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import CreateNewListModal from '../CreateNewListModal';

const NewListButton = function ({ lists, setLists, listLength }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <View>
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
        listLength={listLength}
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
  listLength: PropTypes.number.isRequired,

};

export default NewListButton;
