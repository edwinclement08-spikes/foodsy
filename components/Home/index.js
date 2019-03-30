import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-elements";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <View>
          <Card title="Progress">
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View style={{ flex: 0 }}>
                <AnimatedCircularProgress
                  size={135}
                  width={10}
                  fill={70}
                  tintColor="#00e0ff"
                  backgroundColor="#3d5875"
                >
                  {fill => (
                    <View style={{}}>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        1600/2200
                      </Text>
                      <Text style={{ fontSize: 18, textAlign: "center" }}>
                        Intake
                      </Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={{ flex: 0 }}>
                <AnimatedCircularProgress
                  size={135}
                  width={10}
                  fill={33}
                  tintColor="#f44336"
                  backgroundColor="#3d5875"
                >
                  {fill => (
                    <View>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        900/2700
                      </Text>
                      <Text style={{ fontSize: 18, textAlign: "center" }}>
                        Burnt
                      </Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </Card>
        </View>
        <View>
          <Card title="Diet Recommendation">
            <View style={{ flexDirection: "row" }}>
              <View>
                <Icon name="pizza" style={styles.iconStyle} />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text>Dinner</Text>
                <Text>Chappatti and Poached Egg</Text>
              </View>
            </View>
          </Card>
        </View>
        <View>
          <Text>Tutorial Links</Text>
        </View>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Workouts"
            onPress={() => console.log("notes tapped!")}
          >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Food Consumption"
            onPress={() => {}}
          >
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="Recommended Diet"
            onPress={() => {}}
          >
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
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
    margin: 5,
    padding: 5
  },
  actionButtonIcon: {
    fontSize: 40,
    height: 22,
    color: "white"
  },

  iconStyle: {
    fontSize: 40,
    height: 22,
    color: "black"
  },
  infoTextRadial: {
    fontSize: 18
  },
  infoTextRadialInsde: {
    fontSize: 18
  }
});
