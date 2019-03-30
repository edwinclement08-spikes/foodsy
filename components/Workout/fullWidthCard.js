import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, Button } from "react-native";
import { withNavigation } from "react-navigation"

class FullWidthCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <View
        style={{
          ...styles.cardMainBody,
          height: 220
        }}
      >
        <ImageBackground
          source={this.props.bgImg}
          imageStyle={{ borderRadius: 15 }}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={{ flexDirection: "row", height: "100%" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-end"
              }}
            >
              <View style={{ flex: 0, margin: 20 }}>
                <Text
                  style={{ fontSize: 27, color: "white", fontWeight: "bold" }}
                >
                  {this.props.workoutType}
                </Text>
                <Text
                  style={{
                    fontSize: 21,
                    color: "white",
                    marginBottom: 9
                  }}
                >
                  Get Started
                </Text>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    color: "blue",
                    padding: 7,
                    flex: 0,
                    width: 105
                  }}
                >
                  <TouchableOpacity onPress={this.props.navigation.navigate('WorkoutDetail')}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      Start Now
                    </Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "flex-start",
                justifyContent: "flex-end",
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
            >
              <Image
                source={this.props.person}
                style={{ height: 80, width: 40, margin: 13 }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

styles = {
  cardMainBody: {
    margin: 15
  }
};

export default withNavigation(FullWidthCard);