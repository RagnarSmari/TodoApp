import { StyleSheet } from 'react-native';
import { white } from '../../styles/colors';

export default StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    margin: 5,
    borderRadius: 20,
  },
  modalView: {
    backgroundColor: white,
    justifyContent: 'flex-end',
    margin: 0,
    height: '20%',

  },
  listview: {
    backgroundColor: white,
    height: '100%',
    width: '100%',
    margin: 0,
  },
  listcontainer: {
    flex: 1,
    paddingTop: '15%',
  },
  update: {
    justifyContent: 'center',
  },

  titleStyle: {
    flexDirection: 'row',
    textAlign: 'center',
    margin: 10,
    fontSize: 15,
  },
});
