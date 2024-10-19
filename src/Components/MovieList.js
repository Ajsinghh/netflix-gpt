import React from 'react'
import MovieCards from './MovieCards'
import '../index.css'
import { Link } from 'react-router-dom';
const MovieList = ({title , movies}) => {
  return (
    <div className="p-4 ">
      <div className="md:text-2xl font-bold mb-3 text-white">{title}</div>
      <div className="flex overflow-x-scroll scroll-smooth scrollbar-hide md:h-72 ">
        <div className=" flex gap-5">
          {movies?.map((movie) => (
            <Link key={movie.id} to={'/movie/'+movie.id}>
              {
              <MovieCards movie={movie} />
              }
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList