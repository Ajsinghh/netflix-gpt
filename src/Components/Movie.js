import React from "react";
import { useParams } from "react-router-dom";
import useBackgroundVideo from "../Hooks/useBackgroundVideo";
import useMovieDetails from "../Hooks/useMovieDetails";
import Header from "./Header";
import { MOVIE_CARD } from "../Utilities/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFavourateMovies, removeFavourateMovies} from "../Utilities/moviesSlice";

const Movie = () => {
  const { movieId } = useParams();
  const trailerDetails = useBackgroundVideo(movieId);
  const movieDetails = useMovieDetails(movieId);
  const dispatch = useDispatch();
  const isFavourate = useSelector(store => store.movies.isFavourate[movieId]);

  const handleFavourateBtn = ()=>{
    if(isFavourate){
      dispatch(removeFavourateMovies(movieId))
    }else{
      dispatch(addFavourateMovies(movieDetails)); 
    }
  }

  if (!trailerDetails) return null;
  const movieTrailer = trailerDetails.filter((ele) => ele.type === "Trailer");
  console.log(movieDetails);
  return (
    <div>
      <Header />
      <div className="aspect-video">
        <div className="absolute left-6 bottom-24 text-white">
          <div className=" font-bold text-6xl ">
            {movieDetails?.original_title}
          </div>
          <div className="w-1/2 mt-4">{movieDetails?.overview}</div>
        </div>
        <iframe
          className="size-full  "
          src={
            "https://www.youtube.com/embed/" +
            movieTrailer[0]?.key +
            "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="bg-black p-8 text-white">
        <div className="flex flex-row gap-14">
          <img alt="" src={MOVIE_CARD + movieDetails?.poster_path} />
          <div>
            <div className=" font-bold text-6xl ">
              {movieDetails?.original_title}
            </div>
            <div className="mt-4">
              Genres :{" "}
              {movieDetails?.genres.map((index) => index?.name).join(", ")}
            </div>
            <div className="mt-4">
              Ratings : {(movieDetails?.popularity / 1000).toFixed(1)}
            </div>
            <div className="mt-4">
              Production :{" "}
              {movieDetails?.production_companies
                .map((idx) => idx?.name)
                .join(", ")}
            </div>
            <div className="mt-4">
              Language :{" "}
              {movieDetails?.spoken_languages
                .map((idx) => idx?.name)
                .join(", ")}
            </div>
            <button className="" onClick={handleFavourateBtn}>
              {isFavourate ? (
                <div className="bg-gray-400 p-4 rounded-lg mt-4">
                  Remove from Favourate
                </div>
              ) : (
                <div className="bg-red-700 p-4 rounded-lg mt-4">
                  Add to Favourate
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
