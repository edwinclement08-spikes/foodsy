import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, WebView } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Youtube from "../Demo/youtube";
import { CustomCard, CustomCardFullWidth } from "./CustomCard";
import DietRecommendation from "./DietRecommendation";

export default class Home extends Component {
  goToChatbot = () => {
    this.props.navigation.navigate("Chatbot");
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ccc" }}>
        <ScrollView>
          <CustomCard>
            <Text style={styles.heading}>Progress</Text>
            <View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 10,
                    paddingBottom: 5
                  }}
                >
                  <View style={{ flex: 0 }}>
                    <AnimatedCircularProgress
                      size={135}
                      width={10}
                      fill={70}
                      tintColor="#00e0ff"
                      backgroundColor="#3d5875"
                      style={{ paddingBottom: 10 }}
                    >
                      {fill => (
                        <View style={{}}>
                          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            1600
                          </Text>
                          <Text style={{ fontSize: 18, textAlign: "center" }}>
                            of 2200
                          </Text>
                        </View>
                      )}
                    </AnimatedCircularProgress>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                      Calories Taken
                    </Text>
                  </View>
                  <View style={{ flex: 0 }}>
                    <AnimatedCircularProgress
                      size={135}
                      width={10}
                      fill={33}
                      tintColor="#f44336"
                      backgroundColor="#3d5875"
                      style={{ paddingBottom: 10 }}
                    >
                      {fill => (
                        <View>
                          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            900
                          </Text>
                          <Text style={{ fontSize: 18, textAlign: "center" }}>
                            of 2700
                          </Text>
                        </View>
                      )}
                    </AnimatedCircularProgress>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                      Calories Burnt
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </CustomCard>
          <CustomCard>
            <Text style={styles.heading}>Diet Recommended</Text>
            <DietRecommendation />
          </CustomCard>
          <CustomCardFullWidth>
            <Text style={styles.heading}>Tutorials</Text>
            <Youtube />
          </CustomCardFullWidth>
        </ScrollView>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          style={{ zIndex: 100000 }}
        >
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Workouts"
            onPress={() => this.props.navigation.navigate("Workout")}
          >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Add Food"
            onPress={() => this.props.navigation.navigate("Predictor")}
          >
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="Chat With Us"
            onPress={this.goToChatbot}
          >
            <Icon name="md-people" style={styles.actionButtonIcon} />
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
    fontSize: 26,
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
  },
  heading: { fontSize: 18, fontWeight: "bold" }
});
