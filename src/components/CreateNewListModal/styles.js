import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
  },

  input: {
    flexDirection: 'row',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },

  text: {
    flexDirection: 'row',
    textAlign: 'center',
    margin: 10,
    fontSize: 16,

  },

  addColorBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'pink',
    borderRadius: 10,
  },

  saveLaskBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
  },

  saveText: {
    color: 'white',
  },

});
