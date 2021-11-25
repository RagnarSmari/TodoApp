import React, { useState } from 'react';
import {
  View, Text, Image, TouchableHighlight, TextComponent,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import photo from '../../../assets/add.png';
import CreateBoardModal from '../CreateBoardModal';

const CreateBoardButton = function ({ boards, setBoards }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <View style={styles.CreateBoardButton}>
      <TouchableHighlight
        onPress={() => setIsAddModalOpen(true)}
      >
        <Image style={styles.addIcon} source={photo} />
      </TouchableHighlight>
      <CreateBoardModal isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen} boards={boards} setBoards={setBoards} />
    </View>
  );
};

CreateBoardButton.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
  setBoards: PropTypes.func.isRequired,
};

export default CreateBoardButton;
