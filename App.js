import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./navigation/tabNavigator";
import "react-native-gesture-handler";

import configureStore from "./redux/store/store";

import { Provider } from "react-redux";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const store = configureStore();

const App = () => {
  let [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_700Bold });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
