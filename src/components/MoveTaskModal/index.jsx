import React from 'react';
import {
  NativeModal, Button, TouchableOpacity, View, Text, FlatList,
} from 'react-native';

const MoveTaskModal = function ({
  isOpen, setIsOpen, taskId, listsWithinBoard, tasks, setTasks,
}) {
  const moveTask = ({ id }) => {
    const newTaskArr = tasks;
    const ind = newTaskArr.findIndex((s) => s.id === taskId);
    newTaskArr[ind].listId = id;
    setTasks(newTaskArr);
    setTasks([...tasks]);
  };
  const renderLists = ({ item }) => (
    <TouchableOpacity
      onPress={() => moveTask(item.id)}
    />
  );

  return (
    <NativeModal
      isVisible={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      <Button
        title="Close"
        onPress={() => setIsOpen(false)}
      />
      <FlatList
        data={listsWithinBoard}
        renderItem={renderLists}
        numColumns={1}
        keyExtractor={((list) => list.id)}
      />
    </NativeModal>

  );
};
export default MoveTaskModal;
