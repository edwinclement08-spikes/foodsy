/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, CameraRoll, PermissionsAndroid, WebView} from 'react-native';
import axios from 'axios'
import ImagePicker from 'react-native-image-picker';
import DLIP from '../../assets/constant/DLIP';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { List, ListItem } from 'react-native-elements'


import SERVERIP from '../../assets/constant/SERVER';
import SUBCATIP from '../../assets/constant/SUBCATIP'


import { Button , Text, Input } from 'native-base'

export default class App extends Component{

  constructor(props){

    super(props);
    this.state = {
      fd : null,
      userInput : null,
      result : false,
      predicted : false,
      fill : 86,
      imageData : '',
      imageLink : 'https://i.imgur.com/XBhCPJk.jpg',
      newDish : false,
      list: [
        {
          name: 'Amy Farha'
        },
        {
          name: 'Chris Jackson'
        }
      ]
    }
    this.getPhotos = this.getPhotos.bind(this);

  }

  async componentDidMount(){

    console.log("mounting hello")
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    console.log(granted)

  }

  _uploadToImgur = ()=>{

    return new Promise( ( resolve, reject ) =>{
      console.log("Uploading...")
      var url = `${SERVERIP}/upload`;
      var fd = this.state.fd
      const ts = this;
      axios({
        method: 'post',
        url: url,
        data: fd,
        config: { headers: {'content-type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            var data = response.data.data.link;
            ts.setState({imageLink : data});
            console.log("data is", data)
            console.log("[INFO: ]",response.data.data);
            resolve(data);
        })
        .catch(function (response) {
            //handle error
            console.log("[RESPONSE: ]",response);
            reject(response);
      });      
    })
  }

  getPhotos = async () => {
    var fd = new FormData()
// Open Image Library:
    ImagePicker.showImagePicker({}, (response) => {
      
      console.log(response.uri)

      this.setState({
        imageData : {  
          uri: response.uri,
          type: "image/jpeg",
          name: response.fileName
        }
      })

      fd.append('file', {
        uri: response.uri,
        type: "image/jpeg",
        name: response.fileName
      });

      this.setState({ fd })
      
      console.log(fd , "image data")

      // this._uploadToImgur();
    console.log("LOADED")

    })  ;
  }

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

  _predict = async () =>{

    console.log("Predicting..")
    var url = `${DLIP}/predict`;
    var fd = this.state.fd
    console.log("[PREDICTING: ]", fd)
    const ts = this;
    axios({
      method: 'post',
      url: url,
      data: fd,
      config: { headers: {'content-type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          var data = response.data;
          console.log("[INFO: ]",data)
          var ans = {
            type : data.type,
            class : data.class
          }
          ts.setState({result : ans, predicted : true})
          console.log("[INFO: ]",response.data);
      })
      .catch(function (response) {
          //handle error
          console.log("CAUGHT ERROR: ]",response);
    });
  }

  __specialPredict = async () => {

    await this._uploadToImgur();

    console.log("[STATE INFO] ", this.state)

    console.log("Let's See..")
    var url = `${SUBCATIP}`;

    var fd = this.state.fd
    const ts = this;
    console.log(this.state.imageLink , "=====img link")
    axios.post(
       url,   {image_url : ts.state.imageLink } ,
       { headers: {'content-type': 'application/json' }})
      .then(function (response) {
          //handle success
          var data = response.data;
          console.log("BEST GUESS", data.best_guess)
          let temp = {
            type : "food",
            class: data.best_guess
          }
          ts.setState({result : temp, predicted : true })
          console.log("[INFO: ]",response.data);
      })
      .catch(function (response) {
          //handle error
          console.log("[RESPONSE: ]",response);
    }); 
  }

  render() {
    return (
      <View style={styles.container}>
        <List containerStyle={{marginBottom: 20}}>
          {
            this.state.list.map((l) => (
              <ListItem
                key={l.name}
                title={l.name}
              />
            ))
          }
      </List>
        <Text style={styles.instructions}> Let's Classify Food </Text>


        <Button style={{textAlign:'center',alignSelf: 'center',justifyContent:'center' ,width:260 , marginTop: 20, backgroundColor:"#0083d9"  }}
         onPress={this.getPhotos} >
            <Text>
            Upload Pic
            </Text>
        </Button>

        <Button  style={{textAlign:'center',alignSelf: 'center',justifyContent:'center' ,width:260 , marginTop: 20, backgroundColor:"#0083d9"  }}
         onPress={() => this.props.navigation.navigate('Barcode') } >
            <Text>
            Scan Barcode
            </Text>
        </Button>

        <Button  style={{textAlign:'center',alignSelf: 'center',justifyContent:'center' ,width:260 , marginTop: 20, backgroundColor:"#0083d9"  }}
         onPress={this._predict } >
            <Text>
            Predict
            </Text>
        </Button>        

        <Button  style={{textAlign:'center',alignSelf: 'center',justifyContent:'center' ,width:260 , marginTop: 20, backgroundColor:"#0083d9"  }}
         onPress={this.__specialPredict } >
            <Text>
            Special Predict
            </Text>
        </Button>


        {
          (this.state.predicted && this.state.result.type == 'food' ) && 
          <Text style={{ fontSize: 24 }} >{ this.state.result.class }</Text>
        }



        {/* <Button style={{ marginTop : 100 }} onPress={() => this.props.navigation.navigate('Youtube') } 
        title="Youtube" />   */}



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  spaceMe : {
      marginTop : 100
  }
});