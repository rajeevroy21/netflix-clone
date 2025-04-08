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

export const searchedMovieState = atom({
  key: "searchedMovieState",
  default: [],
});

export const openState = atom({
  key: "openState",
  default: false,
});

export const idState = atom({
  key: "idState",
  default:null,
});
