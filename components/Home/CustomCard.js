import React, { Component } from "react";
import { View, Text } from "react-native";
export class CustomCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.headerText}>{this.props.children[0]}</View>
        </View>
        <View style={styles.body}>
          <View>{this.props.children[1]}</View>
        </View>
      </View>
    );
  }
}
var styles = {
  card: {
    backgroundColor: "white",

    margin: 4,
    borderColor: "darkgrey",
    borderWidth: 1,
    borderRadius: 2,
    boxShadowWidth: 3,
    boxShadowColor: "darkgrey"
  },
  header: {
    padding: 10,
    backgroundColor: "#eee",
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },
  headerText: {
    fontSize: 20,
    color: "black"
  },
  body: {
    padding: 10
  }
};
