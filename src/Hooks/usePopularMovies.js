import { useEffect } from "react";
import { API_OPTION } from "../Utilities/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utilities/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    return json.results;
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
