import React, { Component } from "react";
import { Platform, StyleSheet, View, WebView } from "react-native";



import RecipeVdos from '../../assets/videos/recipe'
import WorkoutVdos from '../../assets/videos/workout'


export default class HomeActivity extends Component {

  render() {
    return (
      <View style={{ height: 250 , paddingTop : 10 , marginTop : 10 }}>

        <WebView style={{ margin : 10 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: RecipeVdos[0] }}

        />

        <WebView style={{ margin : 10 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: RecipeVdos[1] }}

        />

        <WebView style={{ margin : 10 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: RecipeVdos[2] }}

        />

        <WebView style={{ margin : 10 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: RecipeVdos[3] }}

        />



      </View>
    );
  }
}