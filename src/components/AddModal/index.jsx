import React from 'react';
import { TouchableOpacity, Text, Modal } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const AddModal = function ({
  isOpen,
  closeModal,
}) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="my modal"
      transparent
    >
      <TouchableOpacity>
        <Text>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Hi</Text>
      </TouchableOpacity>
    </Modal>
  );
};

AddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default AddModal;
