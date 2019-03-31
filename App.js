/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button, Item, Input, Icon } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Home from "./components/Home";
import Login from "./components/Login";
import Predictor from "./components/Predictor";
import Predict from "./components/Predictor/predict";
import Demo from "./components/Demo";

import Youtube from "./components/Demo/youtube";
import Chatbot from "./components/ChatBot";
import Workout from "./components/Workout";
import WorkoutDetail from "./components/WorkoutDetail";

import SideBar from "./components/SideBar";

import Barcode from "./components/Barcode";
import ExercisePage from "./components/Exercise";

//-----------------------Drawer navigation Bar ---------------------------------------

const Mdn = createDrawerNavigator(
  {
    Home: { screen: Home },
    Predictor: { screen: Predictor },
    Chatbot: { screen: Chatbot },
    Workout: { screen: Workout }
  },
  {
    contentComponent: SideBar
  }
);

//-----------------------Main App navigation ---------------------------------------

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Predictor: { screen: Predictor },
    Barcode: { screen: Barcode },
    Demo: { screen: Demo },
    PredictDemo: { screen: Predict },
    Chatbot: { screen: Chatbot },
    Youtube: { screen: Youtube },
    Workout: { screen: Workout },
    Home: Mdn,
    WorkoutDetail: { screen: WorkoutDetail },
    Exercise: { screen: ExercisePage }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <FontAwesome5
            name={"bars"}
            brand
            style={{ paddingLeft: 15, fontSize: 30, color: "white" }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        title: "Foodsy    ",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 30,
          paddingLeft: 10,
          color: "white",
          alignSelf: "center"
        },
        headerStyle: {
          borderBottomColor: "white",
          borderBottomWidth: 1,
          backgroundColor: "#0051a3"
        }
      };
    }
  }
);

export default createAppContainer(AppNavigator);
