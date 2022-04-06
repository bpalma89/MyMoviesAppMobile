import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../styles/global";

const Home = () => {
  return (
    <View style={globalStyles.center}>
      <Text style={styles.homeText}>Welcome to My Movies App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeText: {
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 20,
    textAlign: "center",
  },
});

export default Home;
