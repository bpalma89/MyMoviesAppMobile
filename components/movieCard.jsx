import React from "react";
import { Card } from "react-native-paper";
import { TouchableOpacity, StyleSheet } from "react-native";

const MovieCard = ({ movie, navigation }) => {
  const navigateToDetail = () => {
    navigation.navigate("Details", { id: movie.id });
  };

  return (
    <TouchableOpacity onPress={navigateToDetail}>
      <Card style={styles.card}>
        <Card.Title
          title={movie.title}
          titleStyle={{ fontFamily: "Montserrat_700Bold" }}
        />
        <Card.Cover source={{ uri: movie.image }} />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginVertical: 10,
  },
});

export default MovieCard;
