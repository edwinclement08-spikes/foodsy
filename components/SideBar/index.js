import React from "react";
import { AppRegistry, Image, StatusBar,Text , StyleSheet ,TouchableOpacity} from "react-native";
import { Button,Container,List,ListItem,Content,Icon,Thumbnail, View} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class SideBar extends React.Component {
  render() {

   
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../../assets/images/avatar6.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>UX Designer </Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, isse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer}
                  onPress={() => this.props.navigation.navigate('pastRides')}>
                
                <Text>Past Rides</Text>  
              </TouchableOpacity>              
              
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:80
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});