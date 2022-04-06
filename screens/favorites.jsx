import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../styles/global";
import { useSelector } from "react-redux";
import { getFavorites } from "../redux/selectors/selectors";
import MovieCardList from "../components/movieCardList";

const Favorites = ({ navigation }) => {
  const favorites = useSelector(getFavorites);

  return (
    <View style={globalStyles.center}>
      <View style={styles.favoritesContainer}>
        {favorites.length > 0 ? (
          <MovieCardList movies={favorites} navigation={navigation} />
        ) : (
          <Text>Found no favorites.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favoritesContainer: {
    width: "100%",
    marginTop: 10,
  },
});

export default Favorites;
