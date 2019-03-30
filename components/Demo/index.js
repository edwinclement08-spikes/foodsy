/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  CameraRoll,
  PermissionsAndroid,
  WebView
} from "react-native";
import axios from "axios";
import ImagePicker from "react-native-image-picker";
import DLIP from "../../assets/constant/DLIP";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fd: null,
      result: false,
      predicted: false,
      fill: 86,
      imageData: ""
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  async componentDidMount() {
    console.log("mounting");
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );

    console.log(granted);
  }

  getPhotos = async () => {
    var fd = new FormData();

    // Open Image Library:
    ImagePicker.launchImageLibrary({}, response => {
      this.setState({
        imageData: {
          uri: response.uri,
          type: "image/jpeg",
          name: response.fileName
        }
      });

      fd.append("file", {
        uri: response.uri,
        type: "image/jpeg",
        name: response.fileName
      });

      this.setState({ fd });
      console.log(fd);
    });
  };

  _uploadToImgur = () => {};

  upload = () => {
    var url = `${DLIP}/analyze`;
    var fd = this.state.fd;
    const ts = this;
    axios({
      method: "post",
      url: url,
      data: fd,
      config: { headers: { "content-type": "multipart/form-data" } }
    })
      .then(function(response) {
        //handle success
        var data = response.data;
        ts.setState({ result: data.result, predicted: true });
        console.log("[INFO: ]", response);
      })
      .catch(function(response) {
        //handle error
        console.log("[RESPONSE: ]", response);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>

        <Button
          style={styles.spaceMe}
          onPress={this.getPhotos}
          title="Upload Pic"
        />

        <Button
          onPress={() => this.props.navigation.navigate("Barcode")}
          title=" Scan Barcode"
        />

        <Button style={styles.spaceMe} onPress={this.upload} title="Send Pic" />
        {this.state.predicted && <Text> {this.state.result} </Text>}

        <Button
          style={styles.spaceMe}
          onPress={() => this.props.navigation.navigate("Youtube")}
          title="Youtube"
        />

        <Button
          style={styles.spaceMe}
          onPress={() => this.props.navigation.navigate("Youtube")}
          title="Upload to Imgur"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  spaceMe: {
    margin: 5,
    padding: 5
  }
});
