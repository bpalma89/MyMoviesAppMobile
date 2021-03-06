import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import Search from "../screens/search";
import Favorites from "../screens/favorites";
import MovieDetails from "../screens/movieDetails";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "grey",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontFamily: "Montserrat_700Bold",
  },
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const MovieSearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
};

const MovieFavoritesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  MovieSearchStackNavigator,
  MovieFavoritesStackNavigator,
};
