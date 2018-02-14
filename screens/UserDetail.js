import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Text
} from "react-native";
import { Tile, List, ListItem } from "react-native-elements";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    width: "100%",
    height: "100%"
  },
  backdrop: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  headline: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0)",
    color: "white"
  }
});

class UserDetail extends Component {
  render() {
    const {
      picture,
      name,
      email,
      phone,
      login,
      dob,
      location
    } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.backdrop}
            source={{
              uri: picture.large
            }}
            resizeMode="cover"
          >
            <Text style={styles.headline}>Headline</Text>
          </ImageBackground>
        </View>
        <List>
          <ListItem title="Email" rightTitle={email} hideChevron />
          <ListItem title="Phone" rightTitle={phone} hideChevron />
        </List>

        <List>
          <ListItem title="Username" rightTitle={login.username} hideChevron />
        </List>

        <List>
          <ListItem title="Birthday" rightTitle={dob} hideChevron />
          <ListItem title="City" rightTitle={location.city} hideChevron />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
