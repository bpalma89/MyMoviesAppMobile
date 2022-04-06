import {
  END_GET_MOVIE_DETAIL_BY_ID,
  END_SEARCH_MOVIES_REQUEST,
  START_GET_MOVIE_DETAIL_BY_ID,
  START_SEARCH_MOVIES_REQUEST,
  RESET_MOVIE_SEARCH,
} from "../action_types/movieActionTypes";

const initialState = {
  movies: [],
  movieDetail: {},
  isLoading: false,
};

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_SEARCH_MOVIES_REQUEST:
      return { ...state, movies: [], isLoading: true };

    case END_SEARCH_MOVIES_REQUEST:
      return { ...state, movies: payload, isLoading: false };

    case START_GET_MOVIE_DETAIL_BY_ID:
      return { ...state, movieDetail: {}, isLoading: true };

    case END_GET_MOVIE_DETAIL_BY_ID:
      return { ...state, movieDetail: payload, isLoading: false };

    case RESET_MOVIE_SEARCH:
      return { movies: [] };

    default:
      return state;
  }
};

export default moviesReducer;
