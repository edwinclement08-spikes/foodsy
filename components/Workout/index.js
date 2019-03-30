import React from "react";
import { View, Text, ScrollView } from "react-native";
import FullWidthCard from "./fullWidthCard";

import bg_0 from "../../assets/images/card-bg/workout_recent_1.png";
import bg_1 from "../../assets/images/card-bg/workout_recent_1a.png";
import bg_2 from "../../assets/images/card-bg/workout_recent_2a.png";
import bg_3 from "../../assets/images/card-bg/workout_recent_3a.png";
import bg_4 from "../../assets/images/card-bg/workout_recent_4a.png";
import bg_5 from "../../assets/images/card-bg/workout_recommendeda.png";

import fullbody_person from "../../assets/images/card-bg/icon_workout_white_fullbody.png";
import aerobic_person from "../../assets/images/card-bg/person/icon_workout_white_aerobic.png";
import arms_person from "../../assets/images/card-bg/person/icon_workout_white_arms.png";
import athletic_person from "../../assets/images/card-bg/person/icon_workout_white_athletic.png";
import backandcore_person from "../../assets/images/card-bg/person/icon_workout_white_backandcore.png";
import extremecardio_person from "../../assets/images/card-bg/person/icon_workout_white_extremecardio.png";
import fatburn_person from "../../assets/images/card-bg/person/icon_workout_white_fatburn.png";
import yogalates_person from "../../assets/images/card-bg/person/icon_workout_white_yogalates.png";
import yogastretch_person from "../../assets/images/card-bg/person/icon_workout_white_yogastretch.png";

var data = [
  { bg: bg_0, person: fullbody_person, name: "Full body" },
  { bg: bg_1, person: aerobic_person, name: "Aerobic" },
  { bg: bg_3, person: athletic_person, name: "Athletic" },
  { bg: bg_4, person: backandcore_person, name: "Back and Core" },
  { bg: bg_5, person: extremecardio_person, name: "Cardio" },
  { bg: bg_2, person: arms_person, name: "Arms" },
  { bg: bg_3, person: fatburn_person, name: "Fatburn" },
  { bg: bg_2, person: yogalates_person, name: "Yoga" }
];

export default class Workout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let g = [];
    for (let i = 0; i < data.length; i++) {
      g.push(
        <FullWidthCard
          key={data[i].name}
          workoutType={data[i].name}
          navPoint={data[i]}
          bgImg={data[i].bg}
          person={data[i].person}
        />
      );
    }
    return <ScrollView>{g}</ScrollView>;
  }
}
