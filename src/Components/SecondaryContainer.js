import React from 'react'
import { useSelector } from 'react-redux'
import MovieTitle from './MovieList'
const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
  const movies = useSelector((store) => store.movies.movies)
  const popularMovies = useSelector((store) => store.movies.popularMovies)
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)
  return (
    <div className=" bg-black">
      <div className="-mt-80 relative z-20">
        <MovieTitle title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieTitle title={"Upcoming Movies"} movies={upcomingMovies} />
        <MovieTitle title={"Popular Movies"} movies={popularMovies} />
        <MovieTitle title={"Top-Rated Movies"} movies={topRatedMovies} />
        <MovieTitle title={"Movies"} movies={movies} />
      </div>
    </div>
  );
}

export default SecondaryContainer