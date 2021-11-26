import { StyleSheet } from 'react-native';
import { gray, white } from '../../styles/colors';

export default StyleSheet.create({
  CreateBoardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: gray,
    borderRadius: 10,
    margin: 10,
  },

  createText: {
    color: white,
  },

  addIcon: {
    height: 35,
    width: 35,
  },
});
