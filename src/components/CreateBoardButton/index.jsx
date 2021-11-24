import React from 'react';
import {
  View, Text, Image, TouchableHighlight, TextComponent,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import photo from '../../../assets/add.png';

const CreateBoardButton = function ({ navigate }) {
  return (
    <View style={styles.CreateBoardButton}>
      <TouchableHighlight
        onPress={() => navigate('CreateBoard')}
      >
        <Image style={styles.addIcon} source={photo} />
      </TouchableHighlight>
    </View>
  );
};

CreateBoardButton.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default CreateBoardButton;
