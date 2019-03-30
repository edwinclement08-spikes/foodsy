import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import gif_1 from "../../assets/images/card-bg/Exercises/1_M.gif";
import gif_2 from "../../assets/images/card-bg/Exercises/2_M.gif";
import gif_3 from "../../assets/images/card-bg/Exercises/3_M.gif";
import gif_4 from "../../assets/images/card-bg/Exercises/4_M.gif";
// import gif_1 from "../../assets/images/card-bg/Exercises/1_M.gif";
// import gif_1 from "../../assets/images/card-bg/Exercises/1_M.gif";
// import gif_1 from "../../assets/images/card-bg/Exercises/1_M.gif";
// import gif_1 from "../../assets/images/card-bg/Exercises/1_M.gif";
// import gif_1 from "../../assets/images/card-bg/Exercises/1_M.gif";
// import gif_1 from "../../assets/images/card-bg/Exercises/1_M.gif";

var exerciseData = [
  { img: gif_1, name: "Jumping Jack" },
  { img: gif_2, name: "Wall Sit" },
  { img: gif_3, name: "Push Up" },
  { img: gif_4, name: "Crunches" }
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
    for (let i = 0; i < exerciseData.length; i++) {
      g.push(<Exercise index={i} />);
    }
    return <ScrollView>{g}</ScrollView>;
  }
}
