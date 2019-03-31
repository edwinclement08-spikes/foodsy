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
  View,
  CameraRoll,
  PermissionsAndroid,
  WebView,
  ScrollView,
  Alert
} from "react-native";
import axios from "axios";
import ImagePicker from "react-native-image-picker";
import DLIP from "../../assets/constant/DLIP";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { Container, Content, List, ListItem, Text } from "native-base";

import SERVERIP from "../../assets/constant/SERVER";
import SUBCATIP from "../../assets/constant/SUBCATIP";

import CustomCard from "../Home/CustomCard";

export default class Predictor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fd: null,
      userInput: null,
      result: false,
      predicted: false,
      fill: 86,
      imageData: "",
      imageLink: "https://i.imgur.com/XBhCPJk.jpg",
      newDish: false
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  async componentDidMount() {
    console.log("mounting hello");
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

  _uploadToImgur = () => {
    return new Promise((resolve, reject) => {
      console.log("Uploading...");
      var url = `${SERVERIP}/upload`;
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
          var data = response.data.data.link;
          ts.setState({ imageLink: data });
          console.log("data is", data);
          console.log("[INFO: ]", response.data.data);
          resolve(data);
        })
        .catch(function(response) {
          //handle error
          console.log("[RESPONSE: ]", response);
          reject(response);
        });
    });
  };

  getPhotos = async () => {
    return new Promise((resolve, reject) => {
      var fd = new FormData();
      // Open Image Library:
      ImagePicker.showImagePicker({}, response => {
        console.log(response.uri);

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

        console.log(fd, "image data");

        resolve(fd);
        // this._uploadToImgur();
        console.log("LOADED");
      });
    });
  };

  // _foodOrNot = () =>{

  //   console.log("Let's See..")
  //   var url = `${DLIP}/check_if_food`;

  //   var fd = this.state.fd
  //   const ts = this;
  //   axios({
  //     method: 'post',
  //     url: url,
  //     data: fd,
  //     config: { headers: {'content-type': 'multipart/form-data' }}
  //     })
  //     .then(function (response) {
  //         //handle success
  //         var data = response.data;
  //         ts.setState({result : data.result, predicted : true})
  //         console.log("[INFO: ]",response);
  //     })
  //     .catch(function (response) {
  //         //handle error
  //         console.log("[RESPONSE: ]",response);
  //   });

  // }

  _predict = async () => {
    console.log("Predicting..");
    var url = `${DLIP}/predict`;
    var fd = this.state.fd;
    console.log("[PREDICTING: ]", fd);
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
        console.log("[INFO: ]", data);
        var ans = {
          type: data.type,
          class: data.class
        };
        ts.setState({ result: ans, predicted: true });
        console.log("[INFO: ]", response.data);
      })
      .catch(function(response) {
        //handle error
        console.log("CAUGHT ERROR: ]", response);
      });
  };

  finalPredict = async () => {
    await this.getPhotos();
  };

  __specialPredict = async () => {
    await this._uploadToImgur();

    console.log("[STATE INFO] ", this.state);

    console.log("Let's See..");
    var url = `${SUBCATIP}`;

    var fd = this.state.fd;
    const ts = this;
    console.log(this.state.imageLink, "=====img link");
    axios
      .post(
        url,
        { image_url: ts.state.imageLink },
        { headers: { "content-type": "application/json" } }
      )
      .then(function(response) {
        //handle success
        var data = response.data;
        console.log("BEST GUESS", data.best_guess);
        let temp = {
          type: "food",
          class: data.best_guess
        };
        ts.setState({ result: temp, predicted: true });
        console.log("[INFO: ]", response.data);
      })
      .catch(function(response) {
        //handle error
        console.log("[RESPONSE: ]", response);
      });
  };

  render() {
    return (
      <Container>
        <Text style={styles.headerText}>Logs</Text>
        <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          style={{ zIndex: 100000 }}
        >
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Click Picture"
            onPress={() => this.props.navigation.navigate("Workout")}
          >
            <Icon name="md-camera" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Scan Barcode"
            onPress={() => Alert.alert("Barcode Scanner", "Future Scope")}
          >
            <Icon name="md-barcode" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </Container>
      // <View style={styles.container}>
      //   <Text style={styles.instructions}> Let's Classify Food </Text>

      //   <Button
      //     style={{
      //       textAlign: "center",
      //       alignSelf: "center",
      //       justifyContent: "center",
      //       width: 260,
      //       marginTop: 20,
      //       backgroundColor: "#0083d9"
      //     }}
      //     onPress={this.getPhotos}
      //   >
      //     <Text>Upload Pic</Text>
      //   </Button>

      //   <Button
      //     style={{
      //       textAlign: "center",
      //       alignSelf: "center",
      //       justifyContent: "center",
      //       width: 260,
      //       marginTop: 20,
      //       backgroundColor: "#0083d9"
      //     }}
      //     onPress={() => this.props.navigation.navigate("Barcode")}
      //   >
      //     <Text>Scan Barcode</Text>
      //   </Button>

      //   <Button
      //     style={{
      //       textAlign: "center",
      //       alignSelf: "center",
      //       justifyContent: "center",
      //       width: 260,
      //       marginTop: 20,
      //       backgroundColor: "#0083d9"
      //     }}
      //     onPress={this._predict}
      //   >
      //     <Text>Predict</Text>
      //   </Button>

      //   <Button
      //     style={{
      //       textAlign: "center",
      //       alignSelf: "center",
      //       justifyContent: "center",
      //       width: 260,
      //       marginTop: 20,
      //       backgroundColor: "#0083d9"
      //     }}
      //     onPress={this.__specialPredict}
      //   >
      //     <Text>Special Predict</Text>
      //   </Button>

      //   {this.state.predicted && this.state.result.type == "food" && (
      //     <Text style={{ fontSize: 24 }}>{this.state.result.class}</Text>
      //   )}

      //   {/* <Button style={{ marginTop : 100 }} onPress={() => this.props.navigation.navigate('Youtube') }
      //   title="Youtube" />   */}
      // </View>
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
    marginTop: 100
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    padding: 10
  }
});
