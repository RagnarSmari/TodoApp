import React from 'react';
import {View, Text, TouchableHighlight, Image, ViewComponent} from 'react-native';
import styles from './styles';
import ListAllBoards from "../../components/ListAllBoards";
// Here is the main view
// Get all the boards and list them

const BoardView = ({ navigation: { navigate } }) => (
    <>
    <View>
        <Text style={styles.main}>My Boards</Text>
        <View>
            <Text>Here are all the boards displayed</Text>
        </View>
        <ListAllBoards style={styles.secondContainer}/>

    </View>
    </>
)

export default BoardView;