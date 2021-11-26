import { StyleSheet } from 'react-native';
import { white, gray } from '../../styles';

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
    borderRadius: 20,

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
    color: 'white',
  },
  optionText: {
    flexDirection: 'row',
    textAlign: 'right',
    margin: 10,
    color: 'black',
  },
});
