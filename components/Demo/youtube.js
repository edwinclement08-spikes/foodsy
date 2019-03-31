import React, { Component } from "react";
import { View, WebView, Text } from "react-native";

import RecipeVdos from "../../assets/videos/recipe";
import WorkoutVdos from "../../assets/videos/workout";

class VideoHolder extends Component {
  render() {
    return (
      <View
        style={{
          height: 250,
          marginLeft: -10,
          marginRight: -10,
          marginTop: -10,
          backgroundColor: "black"
        }}
      >
        <View style={{ height: 200 }}>
          <WebView
            style={{ margin: 10 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: this.props.uri }}
            style={{ height: 200 }}
          />
        </View>
      </View>
    );
  }
}

export default class Youtube extends Component {
  render() {
    var k = [];
    for (let i = 0; i < RecipeVdos.length; i++) {
      k.push(<VideoHolder uri={RecipeVdos[i]} />);
    }

    return <View>{k}</View>;
  }
}
