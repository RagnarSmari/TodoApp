import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Modal = function ({
  isOpen, closeModal, title,
}) {
  return (
    <NativeModal
      isVisible={isOpen}
      hasBackdrop
      onBackButtonPress={closeModal}
      onSwipeComplete={closeModal}
      swipeDirection={['up', 'down']}
    >
      <View>
        <Text>{title}</Text>
        <Text>Sometihng Here</Text>
      </View>
    </NativeModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
export default Modal;
