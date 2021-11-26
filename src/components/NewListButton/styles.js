import { StyleSheet } from 'react-native';
import { gray } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: gray,
    borderRadius: 10,
    margin: 10,
  },

  text: {
    color: 'white',
  },
});
