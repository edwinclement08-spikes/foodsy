import React, { Component } from "react";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { Container, Content, List, ListItem, Text } from "native-base";

class Predictor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Text style={styles.headerText}>Logs</Text>
        <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          style={{ zIndex: 100000 }}
        >
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Click Picture"
            onPress={() => this.props.navigation.navigate("Workout")}
          >
            <Icon name="md-camera" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Scan Barcode"
            onPress={() => this.props.navigation.navigate("PredictDemo")}
          >
            <Icon name="md-barcode" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </Container>
    );
  }
}

const styles = {
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    padding: 10
  }
};

export default Predictor;
