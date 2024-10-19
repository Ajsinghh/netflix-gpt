import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
  const movies = useSelector((store) => store.movies.movies)
  const popularMovies = useSelector((store) => store.movies.popularMovies)
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)
  const favourateMovies = useSelector(store => store.movies.favourateMovies)
  const isFavourate = useSelector(store => store.movies.isFavourate)
  return (
    <div className=" bg-black">
      <div className="md:-mt-80 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        <MovieList title={"Popular Movies"} movies={popularMovies} />
        <MovieList title={"Top-Rated Movies"} movies={topRatedMovies} />
        <MovieList title={"Movies"} movies={movies} />
        {
          Object.keys(isFavourate).length &&
        <MovieList title={"Favourate Movies"} movies={favourateMovies} />
        }
      </div>
    </div>
  );
}

export default SecondaryContainer