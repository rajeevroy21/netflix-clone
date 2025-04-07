import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useRecoilValue } from 'recoil';
import { nowPlayingMoviesState } from '../../recoil/movieState';

const MainContainer = () => {
  const nmovie= useRecoilValue(nowPlayingMoviesState);
  if(!nmovie) return;
  if (!nmovie || nmovie.length === 0) return null;
  const {overview,id,title}=nmovie[0];
    console.log(overview);
    console.log(title);
    console.log(id);
  return (
    <div>
      <VideoTitle overview={overview} title={title}/>
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
