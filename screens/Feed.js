import React, { Component } from "react";
import { Text } from "react-native";
import { ScrollViewContainer } from "../app/styles";
import { users } from "../config/data";
import { List, ListItem } from "react-native-elements";

const FeedContainer = ScrollViewContainer.extend`
  background-color: skyblue;
`;

export default class Feed extends Component {
  onLearnMore = () => {
    console.log("will navigate");
  };

  render() {
    return (
      <FeedContainer>
        <List>
          {users.map(user => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </FeedContainer>
    );
  }
}
