import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
// Get the data from the resources

const ListAllBoards = function ({ boards, selectedBoards }) {
  console.log(boards, selectedBoards);
  return (
    <View>
      <FlatList
        numColumns={2}
        data={boards}
        extraData={selectedBoards}
        renderItem={({ item: { name } }) => {
          <Text>{name}</Text>;
        }}
        keyExtractor={(board) => board.id}
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
  selectedBoards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnailPhoto: PropTypes.string,
  })).isRequired,
};

export default ListAllBoards;
