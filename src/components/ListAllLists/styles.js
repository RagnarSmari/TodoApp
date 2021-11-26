import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  textStyle: {
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,

  },

  input: {
    flexDirection: 'row',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },

  ModalContainerCreateList: {
    backgroundColor: 'white',
    borderRadius: 10,

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  optionText: {
    flexDirection: 'row',
    textAlign: 'right',
    margin: 10,
    color: 'black',
  },
  box: {
    width: 15,
    height: 15,
    margin: 5,
  },
  ColorContainer: {
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  addColorBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
