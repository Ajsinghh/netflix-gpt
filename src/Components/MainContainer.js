import React, { useState } from 'react'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const [showIndex,setShowIndex] = useState(0);
   const movies = useSelector(store => store.movies.nowPlayingMovies)
    if(!movies) return;
  return (
    <div className="size-full relative">
      {movies.map((element, index) => {
        return (
          <VideoTitle
            key={index}
            movie={element}
            shown={index === showIndex ? true : false}
            showIndex={showIndex}
            setShowIndex={(next) => setShowIndex(next)}
            numOfMovies={movies.length}
          />
        );
      })}
    </div>
  );
}

export default MainContainer