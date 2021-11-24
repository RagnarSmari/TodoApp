import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const spinner = () => (
  <View style={styles.spinner}>
    <ActivityIndicator color="black" />
  </View>
);
export default spinner;
