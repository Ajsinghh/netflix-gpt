import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { API_OPTION } from '../Utilities/constants';

const useTrailer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if(!movies)return;
  console.log(movies);
  const fetchTrailer = async(movieId) =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  }
  const trailer = movies.map((movie)=>{
       return fetchTrailer(movie.id);
  })
  console.log(trailer);
//   useEffect(()=>{

//   },[])
}

export default useTrailer