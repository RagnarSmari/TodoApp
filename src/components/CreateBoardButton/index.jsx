import React from 'react';
import {
  View, Text, Image, TouchableHighlight, TextComponent,
} from 'react-native';
import styles from './styles';

const CreateBoardButton = function () {
  return (
    <View style={styles.CreateBoardButton}>
      <TouchableHighlight>
        <Image style={styles.addIcon} source={require('../../../assets/add.png')} />
      </TouchableHighlight>
    </View>
  );
};

export default CreateBoardButton;
