import React from 'react';
import { FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const List = function ({ name, color }) {
  return (
    <View style={{ backgroundColor: color }}>
      <Text>{name}</Text>
    </View>
  );
};

const ListAllLists = function ({ lists }) {
  const renderItem = ({ item }) => (
    <List name={item.name} color={item.color} />
  );
  return (
    <View>
      <FlatList
        data={lists}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={((list) => list.id)}
      />
    </View>
  );
};

ListAllLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    boardId: PropTypes.number,
  })).isRequired,
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ListAllLists;
