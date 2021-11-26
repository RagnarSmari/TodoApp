import { StyleSheet } from 'react-native';
import { white, gray } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: white,
    margin: 5,
    borderRadius: 10,

  },

  newTaskButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'gray',
    borderRadius: 10,

  },

  newTaskText: {
    color: white,
  },

  styleButtons: {
    margin: 2,
  },

  listContainer: {
    margin: 10,
  },

  BCheckbox: {
    width: 'auto',
  },

  BtnContainer: {
    flexDirection: 'row-reverse',
  },
  ModalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    margin: 15,
  },
  input: {
    flexDirection: 'row',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  DescriptionContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  DescriptionText: {
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 100,
  },

});
