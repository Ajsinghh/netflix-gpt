import { useEffect } from "react";
import { API_OPTION } from "../Utilities/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Utilities/moviesSlice";

const useUpcominMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
   !upComingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcominMovies;
