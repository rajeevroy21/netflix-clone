import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => { 
//console.log(movies.poster_path);

  return (
    <div className='px-8'>
        <h1 className='text-3xl p-4 text-white'>{title}</h1>
        <div className='flex overflow-x-auto cursor-pointer no-scrollbar px-3'>
            <div className='flex items-centre'>
                {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
