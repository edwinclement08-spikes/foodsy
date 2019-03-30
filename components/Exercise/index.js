import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import gif_1 from "../../assets/images/card-bg/Exercises/1_M.gif";
import gif_2 from "../../assets/images/card-bg/Exercises/2_M.gif";
import gif_3 from "../../assets/images/card-bg/Exercises/3_M.gif";
import gif_4 from "../../assets/images/card-bg/Exercises/4_M.gif";
import gif_5 from "../../assets/images/card-bg/Exercises/1_M.gif";
import gif_6 from "../../assets/images/card-bg/Exercises/1_M.gif";
import gif_7 from "../../assets/images/card-bg/Exercises/1_M.gif";
import gif_8 from "../../assets/images/card-bg/Exercises/1_M.gif";
import gif_9 from "../../assets/images/card-bg/Exercises/1_M.gif";
import gif_10 from "../../assets/images/card-bg/Exercises/1_M.gif";

var exerciseData = [
  { img: gif_1, name: "Jumping Jack" },
  { img: gif_3, name: "Push Up" },
  { img: gif_2, name: "Wall Sit" },
  { img: gif_4, name: "Crunches" },
  { img: gif_5, name: "Steps" },
  { img: gif_6, name: "Squat" },
  { img: gif_7, name: "Triceps Push Up" },
  { img: gif_8, name: "Plank" },
  { img: gif_9, name: "Jog on Spot" },
  { img: gif_10, name: "Lunges" }
];

class Exercise extends Component {
  render() {
    return (
      <Image
        source={exerciseData[this.props.index].img}
        style={{ width: 400, height: 400 }}
      />
    );
  }
}

export default class ExercisesPage extends React.Component {
  render() {
    let g = [];
    for (let i = 0; i < 2; i++) {
      g.push(<Exercise index={i} />);
    }
    return <ScrollView>{g}</ScrollView>;
  }
}
