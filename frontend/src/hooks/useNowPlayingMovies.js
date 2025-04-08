import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { nowPlayingMoviesState } from '../recoil/movieState'
import axios from 'axios';
import { Now_Playing_Movie, options } from '../../utils/constant';

const useNowPlayingMovies = () => {
  const setNowPlayingMovies=useSetRecoilState(nowPlayingMoviesState);
  useEffect(()=>{
    const fetchNowPlayingMovies = async () => {
        try {
            const res = await axios.get(Now_Playing_Movie, options);
            setNowPlayingMovies(res.data.results);
          //  console.log(res.data.results);
        } catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    };

    fetchNowPlayingMovies();
  },[setNowPlayingMovies]);
};


export default useNowPlayingMovies
