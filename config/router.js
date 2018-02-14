import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";

import Feed from "../screens/Feed";
import Me from "../screens/Me";
import UserDetail from "../screens/UserDetail";

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed
  },
  Details: {
    screen: UserDetail
  }
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: "Feed"
    }
  },
  Me: {
    screen: Me
  }
});
