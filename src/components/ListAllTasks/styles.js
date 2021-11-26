import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: 'white',
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
    color: 'white',
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

});
