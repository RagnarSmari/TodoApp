import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',

  },
  BCheckbox: {
    width: 'auto',
  },
  EditBtnContainer: {
    flex: 2,
    flexDirection: 'row',

  },
  DeleteBtnContainer: {
    flex: 2,
    flexDirection: 'row-reverse',
  },
  BtnContainer: {
    flexDirection: 'row-reverse',
  },
});
