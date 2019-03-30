import React, {Component} from "react";
import {StyleSheet, ImageBackground, Image, View, Dimensions, PermissionsAndroid} from 'react-native';
import {
    Container, Content, Button, Item, Label, Input, Form,Radio,Text, Icon
} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import logo from '../../assets/images/logo.png';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');
export default class SignIn extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            errorMessage: false,
            drivOpt:'1',
            fd : null,
            licenceUrl : '',
            imageUrl : ''
            
        }
    }

    async componentDidMount(){

        console.log("mounting")
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


    uploadDrivingLicence = async () =>{

        var fd = new FormData();
        ImagePicker.launchImageLibrary({}, (response) => {
      
      

            fd.append('file', {
              uri: response.uri,
              type: response.type,
              name: response.fileName
            });
      
            this.setState({ fd })
            // console.log(fd)

            var ref = this;
            var url = 'http://192.168.1.108:3000/upload';
            axios({
              method: 'post',
              url: url,
              data: fd,
              config: { headers: {'Content-Type': 'multipart/form-data' }}
              })
              .then(function (response) {
                  //handle success
                  var data = response.data;
                  ref.setState({ licenceUrl : data.url })
                  console.log( ref.state.licenceUrl );
              })
              .catch(function (response) {
                  //handle error
                  console.log(response);
            });
      
          });



    }

    uploadProfilePicture = () =>{

        var fd = new FormData();
        ImagePicker.launchImageLibrary({}, (response) => {
      
      

            fd.append('file', {
              uri: response.uri,
              type: response.type,
              name: response.fileName
            });
      
            this.setState({ fd })
            // console.log(fd)

            var ref = this;
            var url = 'http://192.168.1.108:3000/upload';
            axios({
              method: 'post',
              url: url,
              data: fd,
              config: { headers: {'Content-Type': 'multipart/form-data' }}
              })
              .then(function (response) {
                  //handle success
                  var data = response.data;
                  ref.setState({ imageUrl : data.url })
                  console.log();
              })
              .catch(function (response) {
                  //handle error
                  console.log(response);
            });
      
          });

    }



    render() {
        return (
            <Container>
                <Content>

                    <View style={styles.logoContainer}>
                        <Text style={styles.logoText}>Registration</Text>
                    </View>

                    <View style={{paddingLeft: 20, paddingRight: 20}}>
                        {this.state.errorMessage &&
                        <View style={{backgroundColor:"lightpink", padding:20,
                         borderRadius:10, borderWidth:2, borderColour:"red", textAlign:"center", marginTop:20}}>
                            <Text>{this.state.errorMessage}</Text>
                        </View> }
                        
                        <Form block style={styles.item}>
                            <Item block floatingLabel>
                                <Label block style={{marginBottom: 20}}>
                                    <Text>Name</Text>
                                </Label>
                                <Input block
                                       onChangeText={(text) => this.setState({"formEmail":text})}
                                       value={this.state["formEmail"]} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input secureTextEntry
                                       onChangeText={(text) => this.setState({"formPassword":text})}
                                       value={this.state["formPassword"]}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Age</Label>
                                <Input secureTextEntry
                                       onChangeText={(text) => this.setState({"formPassword":text})}
                                       value={this.state["formPassword"]}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry
                                       onChangeText={(text) => this.setState({"formPassword":text})}
                                       value={this.state["formPassword"]}/>
                            </Item>

                            <Button rounded info onPress={ this.uploadProfilePicture } style={{textAlign:'center',justifyContent:'center',width:260 ,marginTop: 30, alignSelf: 'center', backgroundColor:"#0083d9"}}>
                                <Text>Select Profile Image</Text>
                            </Button>
                            <Button rounded info onPress={ this.uploadDrivingLicence } style={{textAlign:'center',justifyContent:'center',width:260 ,marginTop: 30, alignSelf: 'center', backgroundColor:"#0083d9"}}>
                                <Text>Select Driving Licence</Text>
                            </Button>

                            
                            <View style={{flexDirection:'row' , marginLeft:15, marginTop:25}}>

                            <View style={{flex:0.5}}>
                              <Radio onPress={() => this.setState({ drivOpt: '1' })} selected={this.state.drivOpt == '1'} />
                              <Text>New Driver</Text> 
                            </View>


                            <View style={{flex:0.5}}>
                              <Radio onPress={() => this.setState({ drivOpt: '2' })} selected={this.state.drivOpt == '2'} />
                              <Text>Exprienced Driver</Text>
                            </View>                        


                            </View>

                        </Form>

                        <Button rounded info style={{textAlign:'center',justifyContent:'center',width:260 ,marginTop: 30, alignSelf: 'center', backgroundColor:"#0083d9"}}>
                            <Text >Register</Text>
                        </Button>



                    </View>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    logoText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '300',
        opacity: 0.9,
    },
    item: {
        paddingTop: 10,
    },

});
