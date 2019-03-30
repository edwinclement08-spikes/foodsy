import React, { Component } from "react";
import { View, WebView } from "react-native";

import RecipeVdos from "../../assets/videos/recipe";
import WorkoutVdos from "../../assets/videos/workout";

export default class Youtube extends Component {
  render() {
    return (
      <View>
        <WebView
          style={{ margin: 10 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: RecipeVdos[0] }}
        />
        <WebView
          style={{ margin: 10 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: RecipeVdos[1] }}
        />
        <WebView
          style={{ margin: 10 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: RecipeVdos[2] }}
        />
        <WebView
          style={{ margin: 10 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: RecipeVdos[3] }}
        />
      </View>
    );
  }
}
