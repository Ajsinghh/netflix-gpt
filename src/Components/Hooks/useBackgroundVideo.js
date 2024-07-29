import  { useEffect, useState } from "react";
import { API_OPTION } from "../../Utilities/constants";

const useBackgroundVideo = (movieId) => {
    const [movieTrailer, setMovieTrailer] = useState(null);
  const getBackgroundVideo = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    setMovieTrailer(json.results);

  };
  useEffect(() => {
    getBackgroundVideo(movieId);
  }, []);
  return movieTrailer;
};

export default useBackgroundVideo;
