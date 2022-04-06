import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MovieCard from "./movieCard";

const MovieCardList = ({ movies, navigation }) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard movie={item} navigation={navigation} />
      )}
    />
  );
};

export default MovieCardList;
