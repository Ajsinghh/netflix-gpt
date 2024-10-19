import  { useEffect, useState} from "react";
import { API_OPTION } from "../Utilities/constants";

const useBackgroundVideo = (movieId) => {
  const [trailerDetails, setTrailerDetails] = useState(null);
   useEffect(() => {
     const getBackgroundVideo = async () => {
       try {
         const response = await fetch(
           `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
           API_OPTION
         );
         const data = await response.json();
         setTrailerDetails(data.results);
       } catch (error) {
         console.error("Failed to fetch trailer details:", error);
         setTrailerDetails(null); // Handle the error by setting to null
       }
     };

     if (movieId) {
       getBackgroundVideo();
     }
   }, [movieId]);

   return trailerDetails;
};

export default useBackgroundVideo;
