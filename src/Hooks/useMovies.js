import { useEffect } from "react";
import { API_OPTION } from "../Utilities/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../Utilities/moviesSlice";

const useMovies = ()=>{
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies.movies);
    const getMovies = async()=>{
        const data = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          API_OPTION
        );
        const json = await data.json();
        dispatch(addMovies(json.results))
    }
    useEffect(()=>{
      !movies &&  getMovies();
    },[])
}

export default useMovies