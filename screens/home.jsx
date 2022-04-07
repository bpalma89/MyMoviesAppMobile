import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../styles/global";

const Home = () => {
  return (
    <View style={globalStyles.center}>
      <Text style={styles.homeTitle}>Welcome to My Movies App</Text>
      <Text style={styles.homeParagraph}>
        Feel free to navigate through the tab below to start searching movies
        and add them to your favorites list and check it.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeTitle: {
    fontSize: 40,
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
  },
  homeParagraph: {
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
  },
});

export default Home;
