import React from 'react'
import { TMDB_IMG_URL } from '../../utils/constant'
import { idState, openState } from '../recoil/movieState';
import { useSetRecoilState } from 'recoil';

const MovieCard = ({posterPath,movieId}) => {
   // console.log(posterPath)
   const setMovieId = useSetRecoilState(idState);
   const open = useSetRecoilState(openState);

  if (!posterPath) return null;
  
  const handleOpen = () => {
    setMovieId(movieId);
    open(true);
  };
   if(posterPath===null) return null;
  return (
    <div className='w-48 pr-2'  onClick={handleOpen}>
       <img src={`${TMDB_IMG_URL}/${posterPath}`} 
       alt="movie banner" />
    </div>
  )
}

export default MovieCard
