import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import CameraExample from '../components/CameraExample';
import ImagePicker from '../components/ImagePickerTest';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Camera',
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
          {/* <CameraExample /> */}
          <ImagePicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
