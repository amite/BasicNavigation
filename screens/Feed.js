import React, { Component } from "react";
import { Text } from "react-native";
import { Container } from "../app/styles";

const FeedContainer = Container.extend`
  background-color: skyblue;
`;

export default class Feed extends Component {
  render() {
    return (
      <FeedContainer>
        <Text>{`Feed Me`}</Text>
      </FeedContainer>
    );
  }
}
