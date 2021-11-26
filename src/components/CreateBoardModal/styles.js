import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  imageContainer: {
    alignItems: 'center',
    margin: 30,
  },
  SaveBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'gray',
    borderRadius: 10,

  },

  saveBtnText: {
    color: 'white',
  },

  input: {
    flexDirection: 'row',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  addImageBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 8,
  },

  addIcon: {
    height: 50,
    width: 50,

  },

  text: {
    flexDirection: 'row',
    marginLeft: 10,
    fontSize: 16,
  },
});
