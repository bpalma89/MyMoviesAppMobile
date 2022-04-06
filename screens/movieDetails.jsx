import React, { useEffect } from "react";
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailById } from "../redux/actions/movieActions";
import { getMovieDetail, checkIfFavorites } from "../redux/selectors/selectors";
import MovieDetailRowInfo from "../components/movieDetailInfoRow";
import {
  addFavorite,
  removeFavorite,
} from "../redux/reducers/favoritesReducer";

const MovieDetails = ({ route }) => {
  const { id } = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailById(id));
  }, [id, dispatch]);

  const movieDetailData = useSelector(getMovieDetail);

  const isFavorite = useSelector(checkIfFavorites(id));

  const addFavoritesHandler = () => {
    const movieFavorite = {
      id: movieDetailData.id,
      image: movieDetailData.image,
      title: movieDetailData.title,
    };
    dispatch(addFavorite(movieFavorite));
  };

  const removeFavoritesHandler = () => {
    dispatch(removeFavorite(id));
  };

  return (
    <ScrollView>
      <Text style={styles.movieTitle}>{movieDetailData.title}</Text>
      <Image
        source={{ uri: movieDetailData.image }}
        style={styles.movieImage}
      ></Image>
      <View style={styles.favoritesButton}>
        {isFavorite ? (
          <Button
            onPress={removeFavoritesHandler}
            title="Remove From Favorites"
          />
        ) : (
          <Button onPress={addFavoritesHandler} title="Add To Favorites" />
        )}
      </View>
      <View style={styles.container}>
        <MovieDetailRowInfo value={movieDetailData.year} label="Year" />
        <MovieDetailRowInfo value={movieDetailData.genres} label="Genres" />
        <MovieDetailRowInfo
          value={movieDetailData.companies}
          label="Companies"
        />
        <MovieDetailRowInfo value={movieDetailData.tagline} label="Tagline" />
        <MovieDetailRowInfo
          value={movieDetailData.languages}
          label="Languages"
        />
        <MovieDetailRowInfo value={movieDetailData.plot} label="Plot" />
        <MovieDetailRowInfo value={movieDetailData.writers} label="Writers" />
        <MovieDetailRowInfo
          value={movieDetailData.directors}
          label="Directors"
        />
        <MovieDetailRowInfo label="Stars" value={movieDetailData.stars} />
        <MovieDetailRowInfo
          label="Runtime"
          value={movieDetailData.runtimeStr}
        />
        <MovieDetailRowInfo
          label="Content Rating"
          value={movieDetailData.contentRating}
        />
        <MovieDetailRowInfo
          label="iMDB Rating"
          value={movieDetailData.imDbRating}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  movieTitle: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  movieImage: {
    width: 400,
    height: 600,
    marginTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    padding: 10,
  },
  movieDetailHeader: {
    flexDirection: "row",
  },
  favoritesIcon: {
    marginTop: 10,
    marginLeft: 100,
  },
  favoritesButton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MovieDetails;
