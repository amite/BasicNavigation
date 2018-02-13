import React, { Component } from "react";
import { Text } from "react-native";
import { Container } from "../app/styles";

const MeContainer = Container.extend`
  background-color: skyblue;
`;

export default class Me extends Component {
  render() {
    return (
      <MeContainer>
        <Text>I am here</Text>
      </MeContainer>
    );
  }
}
