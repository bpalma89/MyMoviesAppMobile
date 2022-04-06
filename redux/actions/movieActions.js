import axios from "axios";
import { IMDB_API_KEY } from "../../constants/constants";
import {
  END_GET_MOVIE_DETAIL_BY_ID,
  END_SEARCH_MOVIES_REQUEST,
  START_GET_MOVIE_DETAIL_BY_ID,
  START_SEARCH_MOVIES_REQUEST,
  RESET_MOVIE_SEARCH,
} from "../action_types/movieActionTypes";

const startSearchMoviesRequest = () => ({
  type: START_SEARCH_MOVIES_REQUEST,
});

const endSearchMoviesRequest = (receivedResponse) => ({
  type: END_SEARCH_MOVIES_REQUEST,
  payload: receivedResponse ? receivedResponse : [],
});

export const searchMoviesFromAPI = (search) => {
  return (dispatch) => {
    dispatch(startSearchMoviesRequest());
    return axios
      .get(`https://imdb-api.com/en/API/SearchMovie/${IMDB_API_KEY}/${search}`)
      .then((res) => dispatch(endSearchMoviesRequest(res.data.results)))
      .catch((error) => {
        console.log(error);
      });
  };
};

const startGetMovieDetailByIdRequest = () => ({
  type: START_GET_MOVIE_DETAIL_BY_ID,
});

const endGetMovieDetailByIdRequest = (receivedResponse) => {
  console.log(receivedResponse);
  return {
    type: END_GET_MOVIE_DETAIL_BY_ID,
    payload: receivedResponse ? receivedResponse : {},
  };
};

export const getMovieDetailById = (id) => {
  return (dispatch) => {
    dispatch(startGetMovieDetailByIdRequest());
    return axios
      .get(`https://imdb-api.com/en/API/Title/${IMDB_API_KEY}/${id}`)
      .then((res) => dispatch(endGetMovieDetailByIdRequest(res.data)))
      .catch((error) => {
        console.log(error);
      });
  };
};

export const resetMovieSearch = () => {
  return { type: RESET_MOVIE_SEARCH };
};
