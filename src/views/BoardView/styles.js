import { StyleSheet } from 'react-native';
import { gray } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  main: {
    padding: 20,
    backgroundColor: gray,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'space-around',
    textTransform: 'capitalize',
  },
  secondContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
