import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useRecoilValue } from 'recoil';
import { trailerMovieState } from '../recoil/movieState';

const VideoBackground = ({movieId}) => {
  const trailerMovie=useRecoilValue(trailerMovieState);
  useMovieById(movieId);
  if (!trailerMovie || !trailerMovie.key) {
    return null; // or show a loader or fallback component
  }
  return (
    <div className='w-full'>
      <iframe
  className='w-full aspect-video'
  src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
  title="YouTube video player"
  allow="autoplay; encrypted-media"
  allowFullScreen
  frameBorder="0"
/>

    </div>
  )
}

export default VideoBackground
