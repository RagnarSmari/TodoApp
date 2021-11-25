import React from 'react';
import {
  Text, TextInput, View, TouchableHighlight, Image,
} from 'react-native';
import styles from './styles';
import photo from '../../../assets/image.png';

const CreateBoard = function () {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const createBoardObject = () => {
    const imgUrl = 'https://i.pinimg.com/474x/45/11/c5/4511c5871ff8011385b023be70878d81.jpg';
    const newBoard = {
      name,
      thumbnailPhoto: imgUrl,
    };
    return newBoard;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableHighlight style={styles.addImageBtn}>
          <Image style={styles.addIcon} source={photo} />
        </TouchableHighlight>
      </View>
      <Text style={styles.text}> Name your board:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setName(val)}
        value={name}
        placeholder="Enter name"
        keyboardType="default"
      />
      <Text style={styles.text}> Add a description:</Text>

      <TextInput
        style={styles.input}
        onChangeText={(val) => setDescription(val)}
        value={description}
        placeholder="Description(optional)"
        keyboardType="default"
      />
      <TouchableHighlight
        onPress={() => createBoardObject(name, description)}
      >
        <Text>Save</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CreateBoard;
