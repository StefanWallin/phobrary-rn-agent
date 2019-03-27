import React from 'react';
import images from '~images';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  feelingContainer: {
    marginTop: 10,
    height: 256,
    alignItems: 'flex-end',
    width: '100%',
  },
});

export default class FeelingImage extends React.PureComponent {
  render() {
    return (
      <View style={styles.feelingContainer}>
        <View style={styles.feelingImage}>
          <Image source={images.startscreen_feeling} />
        </View>
      </View>
    );
  }
}
