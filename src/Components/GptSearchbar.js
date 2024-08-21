import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../Utilities/languageConstant";
import { BG_NETFLIX } from "../Utilities/constants";
import client from "../Utilities/openai";
import { API_OPTION } from "../Utilities/constants";
import { addGptMovieResult } from "../Utilities/gptSlice";
const GptSearchbar = () => {
  const searchInput = useRef(null);
  const currLang = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const searchedMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json =await data.json();
    return json.results;
  };

  const handleSearchButton = async () => {
    const gptQuery =
      "Act as Movie Recommendation system and suggest some movies for the query : " +
      searchInput.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,Sholay,Golmaal,Don,Koi Mil Gaya";
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchedMovies(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(gptMovies);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div>
      <img className="fixed -z-10" src={BG_NETFLIX} alt="bg-netflix" />
      <div className="flex justify-center pt-[10%]">
        <form
          className="grid grid-cols-12 w-1/2 bg-black rounded-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchInput}
            className="col-span-9 p-4 m-4 text-black"
            placeholder={lang[currLang].gptSearchPlaceholder}
          />
          <button
            className="col-span-3 bg-red-700 m-4 py-2 px-4 text-white rounded-xl"
            onClick={handleSearchButton}
          >
            {lang[currLang].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchbar;
