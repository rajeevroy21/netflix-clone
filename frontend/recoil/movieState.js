import { atom } from "recoil";

export const nowPlayingMoviesState = atom({
  key: "nowPlayingMoviesState",
  default: [],
});

export const popularMovieState = atom({
  key: "popularMovieState",
  default: [],
});

export const topRatedMoviesState = atom({
  key: "topRatedMoviesState",
  default: [],
});

export const upcomingMoviesState = atom({
  key: "upcomingMoviesState",
  default: [],
});
export const toggleState = atom({
  key: "toggleState",
  default: false,
});

export const trailerMovieState = atom({
  key: "trailerMovieState",
  default: null,
});

// Stores the search results for movies
export const searchedMovieState = atom({
  key: "searchedMovieState",
  default: [],
});

// Controls whether a UI element (like a modal) is open
export const openState = atom({
  key: "openState",
  default: false,
});

// Stores the selected movie ID
export const idState = atom({
  key: "idState",
  default: "",
});
