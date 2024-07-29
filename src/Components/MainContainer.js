import React, { useState } from 'react'
import VideoTitle from './VideoTitle'
import useNowPlayingMovies from './Hooks/useNowPlayingMovies'
import BackgroundVideo from './BackgroundVideo';

const MainContainer = () => {
    const movies = useNowPlayingMovies();
    const [showIndex,setShowIndex] = useState(0);

    if(!movies) return;
    console.log(movies)
  return (
    <div className='relative min-h-screen'>
        {movies.map((element,index)=>{
            return <VideoTitle 
            key={index}
            movie={element} 
            shown={index === showIndex ?true : false}
            showIndex = {showIndex}
            setShowIndex = {(next) => setShowIndex(next)}
            numOfMovies = {movies.length}
            />
          })}
    </div>
  )
}

export default MainContainer