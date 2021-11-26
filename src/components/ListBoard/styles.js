import { StyleSheet } from 'react-native';
import { gray, white } from '../../styles/colors';

export default StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    margin: 5,
    borderRadius: 20,
  },
  modalView: {
    backgroundColor: '#dbdbdb',
    justifyContent: 'flex-end',
    margin: 0,
    height: '20%',
    borderRadius: 10,

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
  DeleteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    margin: 10,
    height: 45,
  },
  UpdateBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    margin: 10,
    height: 45,
  },
});
