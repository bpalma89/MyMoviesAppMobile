export const getMoviesServiceStatus = (store) =>
  store && store.movies.movies && store.movies.isLoading
    ? store.movies.isLoading
    : false;

export const getMoviesDetailServiceStatus = (store) =>
  store && store.movies.movieDetail && store.movies.isLoading
    ? store.movies.isLoading
    : false;

export const getMovies = (store) =>
  store && store.movies.movies && !store.movies.isLoading
    ? store.movies.movies
    : [];

export const getMovieDetail = (store) =>
  store && store.movies.movieDetail && !store.movies.isLoading
    ? store.movies.movieDetail
    : {};

export const checkIfFavorites = (id) => (store) =>
  store.favorites.favorites.some((favorite) => favorite.id === id)
    ? true
    : false;

export const getFavorites = (store) =>
  store && store.favorites.favorites ? store.favorites.favorites : [];
