import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MovieDetailRowInfo = ({ label, value }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "50%",
    marginTop: 10,
  },
  label: {
    fontFamily: "Montserrat_700Bold",
  },
  value: {
    fontFamily: "Montserrat_400Regular",
  },
});

export default MovieDetailRowInfo;
