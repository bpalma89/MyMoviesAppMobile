import React from "react";
import { Card } from "react-native-paper";
import { TouchableOpacity, StyleSheet } from "react-native";

const MovieCard = ({ movie, navigation }) => {
  const imageUri = movie.image;

  const navigateToDetail = () => {
    navigation.navigate("MovieDetails", { id: movie.id });
  };

  return (
    <TouchableOpacity onPress={navigateToDetail}>
      <Card style={styles.card}>
        <Card.Title title={movie.title} />
        <Card.Cover source={{ uri: imageUri }} />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginTop: 20,
  },
});

export default MovieCard;
