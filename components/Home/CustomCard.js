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

export class CustomCardFullWidth extends Component {
  render() {
    return (
      <View style={styles.cardFullWidth}>
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
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#1dd",
    elevation: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5
  },
  cardFullWidth: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#1dd",
    elevation: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5
  },
  header: {
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#ddd"
  },
  headerText: {
    fontSize: 22,
    color: "black"
  },
  body: {
    padding: 10
  }
};
