import React from 'react';
import { FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const List = function ({ name, color }) {
  <View style={{ backgroundColor: color }}>
    <Text>{name}</Text>
  </View>;
};

const listAllLists = function ({ lists }) {
  console.log(lists);
  const renderList = ({ list }) => (
    <List name={list.name} color={list.color} />
  );
  return (
    <View>
      <FlatList
        data={lists}
        renderItem={renderList}
        numColumns={1}
        keyExtractor={((list) => list.id)}
      />
    </View>
  );
};

listAllLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    boardId: PropTypes.number,
  })),
};
