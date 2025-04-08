import React, { useEffect } from 'react'
import Header from './Header'
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { toggleState } from '../recoil/movieState';
import SearchMovie from './SearchMovie ';
import { userState } from '../recoil/UserState';

const Browse = () => {
    const user =useRecoilValue(userState);
    const navigate=useNavigate();
    const toggle=useRecoilValue(toggleState);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useEffect(()=>{
      if(!user)
        {
          navigate("/");
        }
    },[])
    
  return (
    <div>
       <Header/>
       <div>
        {
          toggle?<SearchMovie/>:(
            <>
            <MainContainer/>
            <MovieContainer/>
            </>
          )
        }
       </div>
    </div>
  )
}

export default Browse
