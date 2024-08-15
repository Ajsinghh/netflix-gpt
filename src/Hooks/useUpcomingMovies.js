import { useEffect } from "react";
import { API_OPTION } from "../Utilities/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Utilities/moviesSlice";

const useUpcominMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
    return json.results;
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcominMovies;
