import React, { useEffect, useState } from 'react';
import {
  FlatList, Text, View, TouchableOpacity, TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import NativeModal from 'react-native-modal';
import ListAllTasks from '../ListAllTasks';
import styles from './styles';

import NewListButton from '../NewListButton';

const List = function ({
  // eslint-disable-next-line react/prop-types
  name, color, tasks, setTasks, lists, setLists, listId, allTasks, boardId,
}) {
  const [listOptions, setListOptions] = useState(false);
  const [listName, setListName] = React.useState('');
  const [listColor, setListColor] = React.useState('');

  const saveListChanges = () => {
    setListOptions(false);
    const allLists = lists;
    const ind = lists.findIndex((s) => s.id === listId);
    allLists[ind].name = listName;
    allLists[ind].color = listColor;
    setLists(allLists);
    setLists([...lists]);
  };

  const deleteList = () => {
    setLists(lists.filter((s) => s.id !== listId));
    setListOptions(false);
  };
  return (
    <View style={{ backgroundColor: color, margin: 5, borderRadius: 10 }}>
      <Text style={styles.textStyle}>{name}</Text>
      <TouchableOpacity
        onPress={() => setListOptions(true)}
        onRequestClose={() => setListOptions(false)}
      >
        <Text>Click here for options</Text>
      </TouchableOpacity>
      <NativeModal
        isVisible={listOptions}
        animationIn="slideInUp"
        style={styles.ModalContainerCreateList}
      >
        <Button
          title="Close"
          onPress={() => setListOptions(false)}
        />
        <Button
          title="Delete List"
          onPress={() => deleteList()}
        />
        <Text>Name:</Text>
        <TextInput
          value={listName}
          onChangeText={(s) => setListName(s)}
          placeholder="New name of list"
          keyboardType="default"
        />
        <Text>New Color(Please put hex value, we recommend #964B00 (brown))</Text>

        <TextInput
          value={listColor}
          onChangeText={(s) => setListColor(s)}
          placeholder="New color of list"
          keyboardType="default"
        />
        <Button
          onPress={() => saveListChanges()}
          title="Save Changes"
        />
      </NativeModal>
      <ListAllTasks tasks={tasks} setTasks={setTasks} listId={listId} allTasks={allTasks} />
    </View>
  );
};

// eslint-disable-next-line react/prop-types
const ListAllLists = function ({
  // eslint-disable-next-line react/prop-types
  lists, setLists, tasks, setTasks, boardId, allLists,
}) {
  const renderItem = ({ item }) => {
    const listTasks = tasks.filter((s) => s.listId === item.id);
    return (
      <List
        name={item.name}
        color={item.color}
        tasks={listTasks}
        setTasks={setTasks}
        listId={item.id}
        allTasks={tasks}
        lists={lists}
        setLists={setLists}
        boardId={item.boardId}
      />
    );
  };
  return (
    <View>
      <NewListButton lists={allLists} setLists={setLists} boardId={boardId} />
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
  })).isRequired,
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ListAllLists;
