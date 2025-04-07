import React from 'react'
import MovieList from './MovieList'
import { useRecoilValue } from 'recoil'
import { nowPlayingMoviesState, popularMovieState, topRatedMoviesState, upcomingMoviesState } from '../../recoil/movieState';
const MovieContainer = () => {
    const pmovie=useRecoilValue(popularMovieState);
    console.log("pmovees list",pmovie);
    const nmovie=useRecoilValue(nowPlayingMoviesState);
   console.log("mmovees list",nmovie);
    const tmovie=useRecoilValue(topRatedMoviesState);
    console.log("tmovees list",tmovie);
    const umovie=useRecoilValue(upcomingMoviesState);
    console.log("umovees list",umovie);
    //console.log(pmovie[0]);

  return (
    <div className='bg-black'>
        <div className='-mt-100 relative z-10'>
        <MovieList title={"popular movies" } movies={pmovie}/>
        <MovieList title={"nowPlaying movies"} movies={nmovie}/>
        <MovieList title={"topRatedMovies movies"} movies={tmovie}/>
        <MovieList title={"upcomingMovies movies"} movies={umovie}/>
        </div>

    </div>
  )
}

export default MovieContainer
