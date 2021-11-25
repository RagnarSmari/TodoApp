import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  input: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,

  },
  addImageBtn: {
    alignItems: 'center',
    backgroundColor: '#b8d5cd',
    padding: 10,
    borderRadius: 8,
  },

  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
});
