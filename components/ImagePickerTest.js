import React from 'react';
import { Button, Image, View, Text, NativeModules} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import axios from 'axios';
import { stringify } from 'qs';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
    data: null
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Take a picture"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
          <Button 
            title="Upload Image to Parser"
            onPress={this._uploadImage}
          />
          <Text>Data: {this.data}</Text>
      </View>
    );
  }

  _uploadImage = async() => {
    // post_url = `https://api.taggun.io/api/receipt/v1/simple/encoded?image=${this.state.image.image}&filename=sample.jpg&contentType=image/jpeg&refresh=false&incognito=false&ipAddress=32.4.2.223&near=Kalamazoo,%20MI,%20USA&ignoreMerchantName=string&language=en`;

    console.log(Object.keys(this.state.image));

    blob_obj = JSON.stringify({
      "image": this.state.image.base64,
      "filename": "sample.jpg",
      "contentType": "image/jpeg",
      "refresh": false,
      "incognito": false,
      "ipAddress": "32.4.2.223",
      "near": "Kalamazoo, MI, USA",
      "ignoreMerchantName": "string",
      "language": "en"
    });

    // console.log(blob_obj);
    
    fetch("https://api.taggun.io/api/receipt/v1/simple/encoded",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "apikey": "b84cf380374611e9bba4c5572eb43161"
      },
      body: blob_obj
    }).then((response) => {
      console.log("Success");
      console.log(response);
    }).catch((error) => {
      console.log("Failure!");
      console.log(error);
    });
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({base64: true});

    if (!result.cancelled) {
      this.setState({ image: result});
    }
  };
}