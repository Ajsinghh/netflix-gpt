import React from 'react'
import { MOVIE_CARD } from '../Utilities/constants'
const MovieCards = ({movie}) => {
   if(!movie?.poster_path) return;
    return (
      <div
        className="w-32 md:w-40 md:hover:w-44 transition duration-150 ease-out hover:ease-in"
      >
        <img
          className="rounded-2xl"
          alt="card"
          src={MOVIE_CARD + movie?.poster_path}
        />
      </div>
    );
}

export default MovieCards