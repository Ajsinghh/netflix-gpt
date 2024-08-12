import React from 'react'
import { MOVIE_CARD } from '../Utilities/constants'
const MovieCards = ({movie}) => {
  return (
    <div className="w-40 hover:w-44 transition duration-150 ease-out hover:ease-in">
      <img
        className="rounded-2xl"
        alt="card"
        src={MOVIE_CARD + movie?.poster_path}
      />
    </div>
  );
}

export default MovieCards