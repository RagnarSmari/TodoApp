import { StyleSheet } from 'react-native';
import { babyblue, white } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
  },

  headingContainer: {
    backgroundColor: babyblue,
  },

  buttonContainer: {
    margin: 10,
  },

  headingStyle: {
    flexDirection: 'row',
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18,

  },
  secondContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: white,

  },
});
