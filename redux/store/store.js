import { createStore, combineReducers } from "redux";
import moviesReducer from "../reducers/movieReducers";
import favoritesReducer from "../reducers/favoritesReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
