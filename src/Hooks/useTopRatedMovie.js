import { useEffect } from "react";
import { API_OPTION } from "../Utilities/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utilities/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
   !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
