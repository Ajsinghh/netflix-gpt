import { useEffect, useState } from "react";
import { API_OPTION } from "../Utilities/constants";

const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          API_OPTION
        );
        const json = await data.json();
        setMovieDetails(json);
      } catch (error) {
        console.error("Failed to fetch trailer details:", error);
        setMovieDetails(null); // Handle the error by setting to null
      }
    };
    if(movieId){
        getMovieDetails();
    }
  }, [movieId]);
  return movieDetails;
};

export default useMovieDetails;
