import  { useEffect, useState } from "react";
import { API_OPTION } from "../Utilities/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../Utilities/moviesSlice";

const useBackgroundVideo = (movieId) => {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);
  const movieTrailer = useSelector(store => store.movies.movieTrailer[movieId]);
  const getBackgroundVideo = async (movieId) => {
    try{
      setLoading(true);
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    const trailerDetails = json.results;
    dispatch(addMovieTrailer({movieId,trailerDetails}))
  } catch(error){
    console.error('Failed to fetch trailer details',error);
  } finally{
    setLoading(false);
  }
  };
  useEffect(() => {
    if(!movieTrailer) getBackgroundVideo(movieId);
  }, []);
  return loading;
};

export default useBackgroundVideo;
