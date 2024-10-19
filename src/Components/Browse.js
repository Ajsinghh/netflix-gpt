import React  from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import useMovies from "../Hooks/useMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovie";
import useUpcominMovies from "../Hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  useMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcominMovies();
  
  const gptSearch = useSelector((store) => store.gpt.gptSearchState);
  return (
    <div className="relative size-full">
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
