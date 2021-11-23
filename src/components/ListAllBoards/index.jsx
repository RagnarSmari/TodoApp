import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles';
// Get the data from the resources
const Board = function ({ title, photo }) {
  return (
    <TouchableHighlight>
      <View>
        <Image
          source={{ uri: photo }}
          style={styles.image}
        />
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>

  );
};

const ListAllBoards = function ({ boards }) {
  const renderItem = ({ item }) => (
    <Board title={item.name} photo={item.thumbnailPhoto} />
  );
  return (
    <View>
      <FlatList
        data={boards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

ListAllBoards.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnailPhoto: PropTypes.string,
  })).isRequired,
  // selectedBoards: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number,
  //   name: PropTypes.string,
  //   thumbnailPhoto: PropTypes.string,
  // })).isRequired,
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
Image.propTypes = {

};
export default ListAllBoards;
