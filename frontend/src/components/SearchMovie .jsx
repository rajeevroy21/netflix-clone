import axios from 'axios';
import React, { useState } from 'react';
import { options, SEARCH_MOVIE_URL } from '../../utils/constant';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { searchedMovieState } from '../../recoil/movieState';
import { loadingState } from '../../recoil/UserState';
import MovieList from './MovieList';

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const setSearchedMovie = useSetRecoilState(searchedMovieState);
  const searchedMovies = useRecoilValue(searchedMovieState);
  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}`, options);
      const movies = res?.data?.results || [];
      console.log(movies)
      setSearchedMovie(movies);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setSearchMovie(""); // ✅ Reset the search input
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="w-full max-w-2xl mx-auto mt-35 px-4">
        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative bg-white-100">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            type="search"
            id="search"
            className="block w-full p-4 pl-10 pr-24 text-1xl rounded-lg bg-gray-100"
            placeholder="Search movies..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 cursor-pointer"
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </div>
      </form>

      {/* ✅ Correct way to conditionally render results */}
      {searchedMovies && searchedMovies.length > 0 ? (
        <MovieList title="Search Results" movies={searchedMovies} />
      ) : (
        <h1 className="text-center mt-4">Movie Not Found!!</h1>
      )}
    </>
  );
};

export default SearchMovie;
