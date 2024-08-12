import React from 'react'
import { useSelector } from 'react-redux'
import MovieTitle from './MovieTitle'
import useMovies from '../Hooks/useMovies'
const SecondaryContainer = () => {
  useMovies();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
  const movies = useSelector((store) => store.movies.movies)
  return (
    <div className=" bg-black">
      <div className="-mt-80 relative z-20">
        <MovieTitle title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieTitle title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieTitle title={"Movies"} movies={movies} />
        <MovieTitle title={"Movies"} movies={movies} />
      </div>
    </div>
  );
}

export default SecondaryContainer