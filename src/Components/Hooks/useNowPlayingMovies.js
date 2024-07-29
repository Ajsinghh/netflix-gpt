import { useEffect, useState } from "react";
import { API_OPTION } from "../../Utilities/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../../Utilities/moviesSlice";

const useNowPlayingMovies = () => {
  const [movies,setMovies] = useState(null);
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    console.log(json);
    dispatch(addMovies(json.results));
    setMovies(json.results);
};
useEffect(() => {
    getMovies();
}, []);
return movies;
};

export default useNowPlayingMovies;
