import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MovieCardList from "../components/movieCardList";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  getMoviesServiceStatus,
} from "../redux/selectors/selectors";
import {
  resetMovieSearch,
  searchMoviesFromAPI,
} from "../redux/actions/movieActions";
import { FontAwesome } from "react-native-vector-icons";

const Search = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const movies = useSelector(getMovies);
  const dispatch = useDispatch();

  const searchHandler = () => {
    dispatch(searchMoviesFromAPI(searchText));
    Keyboard.dismiss();
  };

  useEffect(() => {
    dispatch(resetMovieSearch());
  }, [dispatch]);

  let isMovieServiceLoading = useSelector(getMoviesServiceStatus);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <View style={styles.actionsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search movies"
            onChangeText={setSearchText}
            value={searchText}
          />
          <FontAwesome
            size={30}
            style={styles.searchButton}
            onPress={searchHandler}
            name="search"
          />
        </View>
        <View style={styles.contentContainer}>
          {isMovieServiceLoading ? (
            <ActivityIndicator size="large" color="grey" />
          ) : Object.keys(movies).length > 0 ? (
            <MovieCardList movies={movies} navigation={navigation} />
          ) : (
            <Text style={styles.text}>Found no movies.</Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    fontFamily: "Montserrat_400Regular",
  },
  contentContainer: {
    width: "100%",
    flex: 1,
  },
  actionsContainer: {
    flexDirection: "row",
  },
  searchButton: {
    marginTop: 15,
  },
  text: {
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
  },
});

export default Search;
