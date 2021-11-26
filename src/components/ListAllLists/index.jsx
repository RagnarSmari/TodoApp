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
  name, color, tasks, setTasks, lists, setLists, listId, allTasks, allLists,
}) {
  const [listOptions, setListOptions] = useState(false);
  const [listName, setListName] = React.useState('');
  const [listColor, setListColor] = React.useState('red');

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
    setLists(allLists.filter((s) => s.id !== listId));
  };
  return (
    <View style={{ backgroundColor: color, margin: 5, borderRadius: 10 }}>
      <Text style={styles.textStyle}>{name}</Text>
      <TouchableOpacity
        onPress={() => setListOptions(true)}
        onRequestClose={() => setListOptions(false)}
      >
        <Text style={styles.optionText}> Options</Text>
      </TouchableOpacity>
      <NativeModal
        isVisible={listOptions}
        animationIn="slideInUp"
        onBackdropPress={() => setListOptions(false)}
        onBackButtonPress={() => setListOptions(false)}
      >
        <View style={styles.ModalContainerCreateList}>
          <Button
            title="Delete List"
            onPress={() => deleteList()}
          />
          <Text style={styles.text}>List Name</Text>
          <TextInput
            style={styles.input}
            value={listName}
            onChangeText={(s) => setListName(s)}
            placeholder="New name of list"
            keyboardType="default"
          />
          <Text style={styles.text}>Color</Text>
          <TextInput
            style={styles.input}
            value={listColor}
            onChangeText={(s) => setListColor(s)}
            placeholder="New color of list"
            keyboardType="default"
          />
          <View style={[styles.addColorBtn, { backgroundColor: listColor }]} />
          <View style={styles.ColorContainer}>
            <TouchableOpacity onPress={() => setListColor('red')}>
              <View style={[styles.box, { backgroundColor: 'red' }]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setListColor('orange')}>
              <View style={[styles.box, { backgroundColor: 'orange' }]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setListColor('mediumseagreen')}>
              <View style={[styles.box, { backgroundColor: 'mediumseagreen' }]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setListColor('deepskyblue')}>
              <View style={[styles.box, { backgroundColor: 'deepskyblue' }]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setListColor('mediumturquoise')}>
              <View style={[styles.box, { backgroundColor: 'mediumturquoise' }]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setListColor('mediumslateblue')}>
              <View style={[styles.box, { backgroundColor: 'mediumslateblue' }]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setListColor('purple')}>
              <View style={[styles.box, { backgroundColor: 'purple' }]} />
            </TouchableOpacity>
          </View>
          <Button
            onPress={() => saveListChanges()}
            title="Save Changes"
          />
          <Button
            title="Close"
            background
            onPress={() => setListOptions(false)}
          />
        </View>
      </NativeModal>
      <ListAllTasks
        tasks={tasks}
        setTasks={setTasks}
        listId={listId}
        allTasks={allTasks}
        allLists={lists}
      />
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
        allLists={allLists}
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
