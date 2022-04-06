import { createSlice } from "@reduxjs/toolkit";

export const favoritesReducer = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
    removeFavorite: (state, action) => {
      return {
        favorites: [
          ...state.favorites.filter(
            (favorite) => favorite.id !== action.payload
          ),
        ],
      };
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesReducer.actions;

export default favoritesReducer.reducer;
