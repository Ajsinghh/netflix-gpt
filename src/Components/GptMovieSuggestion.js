import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
const GptMovieSuggestion = () => {
    const {movieNames, movieResults} = useSelector(store => store.gpt);
    if(!movieNames) return null;
    console.log(movieNames);
  return (
    <div className='p-4 m-4 bg-black text-white opacity-90'>
        <div>
          {movieNames.map((movieNames , index) =>{
            return(
            <MovieList key={movieNames} title={movieNames} movies={movieResults[index]}/>
          )})}
        </div>
    </div>
  )
}

export default GptMovieSuggestion