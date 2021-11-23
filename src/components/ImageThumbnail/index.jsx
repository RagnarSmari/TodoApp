import React from 'react';
import { withNavigation } from 'react-navigation';
import { Image, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const ImageThumbnail = function ({
  photoUrl, name, isSelected, navigation: { navigate },
}) {
  return (
    <TouchableOpacity
      onPress={() => navigate('ListView', { filename: name })}
    >
      <View>
        <Image
          resizeMode="cover"
          source={{
            uri: { photoUrl },
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

ImageThumbnail.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  navigation: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  name: PropTypes.number.isRequired,
};
export default ImageThumbnail;
