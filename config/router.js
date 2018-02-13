import React from "react";
import { TabNavigator } from "react-navigation";

import Feed from "../screens/Feed";
import Me from "../screens/Me";

export const Tabs = TabNavigator({
  Feed: {
    screen: Feed
  },
  Me: {
    screen: Me
  }
});
