import React, { Component } from "react";
import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import ActionButton from "react-native-action-button";

import gif_1 from "../../assets/images/card-bg/Exercises/1_M.gif";
import gif_2 from "../../assets/images/card-bg/Exercises/2_M.gif";
import gif_3 from "../../assets/images/card-bg/Exercises/3_M.gif";
import gif_4 from "../../assets/images/card-bg/Exercises/4_M.gif";
import gif_5 from "../../assets/images/card-bg/Exercises/5_M.gif";
import gif_6 from "../../assets/images/card-bg/Exercises/6_M.gif";
import gif_7 from "../../assets/images/card-bg/Exercises/7_M.gif";
import gif_8 from "../../assets/images/card-bg/Exercises/8_M.gif";
import gif_9 from "../../assets/images/card-bg/Exercises/9_M.gif";
import gif_10 from "../../assets/images/card-bg/Exercises/10_M.gif";

var exerciseData = [
  { img: gif_1, name: "Jumping Jack (x20)" },
  { img: gif_3, name: "Push Up (x10)" },
  { img: gif_2, name: "Wall Sit (5min)" },
  { img: gif_4, name: "Crunches (x20)" },
  { img: gif_5, name: "Steps (x20)" },
  { img: gif_6, name: "Squat (x40)" },
  { img: gif_7, name: "Triceps Push Up (x20)" },
  { img: gif_8, name: "Plank (2min)" },
  { img: gif_9, name: "Jog on Spot (5min)" },
  { img: gif_10, name: "Lunges (x20)" }
];

class Exercise extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 28 }}
            >
              {exerciseData[this.props.index].name}
            </Text>
          </View>
        </View>
        <View
          style={{
            ...styles.body,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <View>
            <Image
              source={exerciseData[this.props.index].img}
              style={{ width: 350, height: 350 }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default class ExercisesPage extends React.Component {
  render() {
    const workoutType = this.props.navigation.getParam("workoutType", "");
    let g = [];

    if (workoutType === "Full body") {
      for (let i = 0; i < 2; i++) {
        g.push(<Exercise index={i} />);
      }
    } else if (workoutType === "Aerobic") {
      for (let i = 2; i < 4; i++) {
        g.push(<Exercise index={i} />);
      }
    } else if (workoutType === "Athletic") {
      for (let i = 4; i < 6; i++) {
        g.push(<Exercise index={i} />);
      }
    }
    if (g.length === 0) {
      return (
        <View style={styles.Body}>
          <Text style={{ ...styles.Text, fontWeight: "bold" }}>
            No Exercises Added
          </Text>
          <Text style={styles.Text}>Help By adding a couple :-)</Text>
          <ActionButton
            buttonColor="rgba(231,76,60,1)"
            style={{ zIndex: 100000 }}
          />
        </View>
      );
    } else {
      return (
        <View>
          <ScrollView>{g}</ScrollView>
          <ActionButton
            buttonColor="rgba(231,76,60,1)"
            style={{ zIndex: 100000 }}
          />
        </View>
      );
    }
  }
}

var styles = {
  Text: {
    fontSize: 30,
    alignItems: "center",
    textAlign: "center"
  },
  Body: {
    flex: 1,
    justifyContent: "center"
  },
  card: {
    backgroundColor: "white",
    margin: 20,
    borderColor: "darkgrey",
    borderWidth: 2,
    borderRadius: 10
  },
  header: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    backgroundColor: "#eee",
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },
  headerText: {
    fontSize: 22,
    color: "black"
  }
};
