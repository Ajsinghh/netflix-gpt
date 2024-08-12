import React from 'react'
import MovieCards from './MovieCards'
import '../index.css'
const MovieTitle = ({title , movies}) => {
  return (
    <div className="p-4 ">
        <div className="text-2xl font-bold mb-3 text-white">{title}</div>
      <div className='flex overflow-x-scroll scroll-smooth scrollbar-hide h-72 '>
        <div className=" flex gap-5">
          {movies?.map((movie) => {
            return <MovieCards key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieTitle