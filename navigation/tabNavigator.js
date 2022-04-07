import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  MainStackNavigator,
  MovieSearchStackNavigator,
  MovieFavoritesStackNavigator,
} from "./stackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "star" : "star-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#555555",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontFamily: "Montserrat_400Regular",
        },
      })}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Search" component={MovieSearchStackNavigator} />
      <Tab.Screen name="Favorites" component={MovieFavoritesStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
