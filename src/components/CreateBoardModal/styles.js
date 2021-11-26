import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  imageContainer: {
    alignItems: 'center',
    margin: 12,
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
    borderWidth: 2,
    borderRadius: 8,
  },

  addIcon: {
    height: 50,
    width: 50,

  },

  text: {
    marginLeft: 12,
  },
});
