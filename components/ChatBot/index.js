import React from "react";
import { View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow-text";

const BOT_USER = {
  _id: 2,
  name: "Foodsy",
  avatar: "https://placeimg.com/140/140/any"
};

export default class ChatBot extends React.Component {
  constructor(props) {
    super(props);
    let firstMsg = {
      _id: 1,
      text: "Hello, what would you like to do ? Workout or Snap your Food?",
      createdAt: new Date(),
      user: BOT_USER
    };

    this.state = {
      messages: [firstMsg]
    };
  }

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      "dialogflow-lwrswf@unscript.iam.gserviceaccount.com",
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClNo9BCdz7nJT9\nlSgUtqHJFFz0IKe2/NrA0OKNXTv6lEy+LthVSo1nz9HJEiMhpG7EJ7GIV+jqXHda\nqupHa+D5wYmkJOCS+9lCHvzGQiTE1IZRJDehHELBY/F9GaB8S9BxK29683O4Dq9p\nt2Rs6CQW0nNNtizp8+uEhi3ICHqq7+tPxxx3QxXpf21RdwrRFuAie0mGbGFQ/u7l\ncCXkpMYz5RK7D7US77BpuiGtCJ9cCEHXQ1k4eTfY+fLuriGkXues4lPWce8gnYLA\nQsQ2kCF6xlclhlVRjl1PXLNQIOu6k9D9OFcDaMK6xihg/3HNLNEvfEUhshO+EbmQ\nj2aH+24zAgMBAAECggEACGb28CLVR0KWXTMpv6vuHHDZrVy/ytGfOnElJHVaaIsE\nQCPXwraw7FeoXqZ6fOqE65rtL3bxFIIxW74Xfhxha7JJEr0BYthGG1PCHT8d6Zi5\nYAUMgzgRuQ4hKPCVtdyRNEA2QjWBbBnrF+BIzjUcKMD5NjmOnTNXhfzg9SxhOLI3\n/mu7e9/gLjQbbBHPHXu/u4quAY3nf1e00eUBUdPLjAVCLrkF7bY31WsaVAAK7Rvi\n0SY/M1NoB7c1Zzct9m+I6PZow/jDmNVDY7igqlwLyKghVNm2/QKF0eA7xPOfca/Q\ncCnamxWSPCwXe4XFt0GEfBqpG+G6oOMlkFZVndgnQQKBgQDYXuC9P+C+7wCTxQOd\nD7vEIot8LJUi1UqSShyI5PURMq+dtBw9AImvtlg7mq7qKZ16+gUyjvle21q80uwx\nKB6s7yTqtmc1rtw4NTXLVrW+6uioWtcxRTZUS377PfRREpPZuQaFUxElWmgGHjiK\nfNNKowyNhVJffT5eXPYGPl4qIQKBgQDDeQYteaQ8jPIXDtpCkSGQV0/sXP8uGq5I\nDY2WLP57pL9PszcCf+o5QlOOHnUiQJBrE4p4kmkV0CIoycJPS6uUfbwMiurh4ErC\nhJj2fo9VOGN7j//gySy6kFfe2DsqzOytdLbxzJgIKKgz9MwvW3gJw+FgUM66lLeE\naPz/zaoV0wKBgFKNAFm0AV9XeHToedR2qEDQnT8nE09S6TyfIfvovsds+yvEB/IO\nPnnXrBoxjgKxFfBRa6I6glH6hsf8ATlQAUQhiYgzR3Vn3YVkZ73Iu1a38UQqRGf7\n7BqFI1Ff9dLor5gly6MaajRCJeYPqarMrSCQzL1B3IeqFR2TghonuW2BAoGAJbBD\n/Kijffk/BCsc8hDBg+8RveUAXodOax4R2o66UmSlblyDkrvPEVM0gQZmV0BTmBGg\ndTblhAspSuv7xwY0AuFrTI/MUdjJEVA3ne8w+6FvrPdKwrCHK0GBb7oJTmtMhvUm\nAOENvyT3qWzdoZPlRRy7a7Ko6VibObB0d23UCXkCgYAdVMZgSfPbX/HUfYq658o1\nc1R2JDmhXpagCoBtVg0YoLFD6Xc/gjP0Na4Ft7325MlCiBSfaUIL1Ms6/T7ZG1gD\nXs8lAobk1HhxOXLsXBJmzfFfcmqaEt2qikf/ar1TXamIVLKzjQjAM3k3P6GN6EDH\nkRFiB+atPLcyOr1z1rtoyA==\n-----END PRIVATE KEY-----\n",
      Dialogflow_V2.LANG_ENGLISH_US,
      "unscript"
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  handleGoogleResponse(result) {
    console.log(result);
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}
