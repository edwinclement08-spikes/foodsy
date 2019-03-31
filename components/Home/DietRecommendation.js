import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class DietRecommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 1,
      breakfast: true,
      lunch: false,
      dinner: false
    };
  }
  render() {
    return (
      <View style={styles.body}>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableHighlight
            style={{ flex: 1 }}
            onPress={() => this.setState({ tabIndex: 0 })}
          >
            <Text
              style={
                this.state.tabIndex == 0
                  ? styles.tabHeaderActive
                  : styles.tabHeader
              }
            >
              Gain
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ flex: 1 }}
            onPress={() => this.setState({ tabIndex: 1 })}
          >
            <Text
              style={
                this.state.tabIndex == 1
                  ? styles.tabHeaderActive
                  : styles.tabHeader
              }
            >
              Maintain
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ flex: 1 }}
            onPress={() => this.setState({ tabIndex: 2 })}
          >
            <Text
              style={
                this.state.tabIndex == 2
                  ? styles.tabHeaderActive
                  : styles.tabHeader
              }
            >
              Lose
            </Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: "row",
            display: this.state.tabIndex == 0 ? "flex" : "none"
          }}
        >
          <View>
            <Icon name="food" style={styles.iconStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text>Gain</Text>
            <Text>Chappatti and Poached Egg</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            display: this.state.tabIndex == 1 ? "flex" : "none"
          }}
        >
          <View>
            <Icon name="food" style={styles.iconStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text>Maintain</Text>
            <Text>Chappatti and Poached Egg</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            display: this.state.tabIndex == 2 ? "flex" : "none"
          }}
        >
          <View>
            <Icon name="food" style={styles.iconStyle} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text>Loss</Text>
            <Text>Chappatti and Poached Egg</Text>
          </View>
        </View>
      </View>
    );
  }
}

var styles = {
  body: {},
  iconStyle: {
    fontSize: 50
  },
  tabHeaderActive: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  hidden: {
    display: "none"
  },
  tabHeader: {
    fontSize: 20,
    textAlign: "center"
  }
};
