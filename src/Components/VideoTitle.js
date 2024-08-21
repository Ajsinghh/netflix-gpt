import React from 'react'
import useBackgroundVideo from '../Hooks/useBackgroundVideo';
import { useSelector } from 'react-redux';

const VideoTitle = ({movie, shown,showIndex,setShowIndex,numOfMovies}) => {
  const loading = useBackgroundVideo(movie.id);
  
  const trailer = useSelector(store => store?.movies?.movieTrailer[movie?.id] || [])
  if(loading){
    return <p>Loading....</p>
  }
  const movieTrailer = trailer.filter((ele) => ele.type === "Trailer");
  
  const handleRightButton = ()=>{
    setShowIndex((showIndex+1)%numOfMovies);
  }
  const handleLeftButton = ()=>{
    console.log(showIndex)
    if(showIndex === 0) {
      console.log("hello")
      console.log(numOfMovies)
      setShowIndex(numOfMovies-1)
      return;
    }
    else{
      setShowIndex((showIndex-1));
    }
  }

  return (
    <div className="size-full relative">
      <div className="relative">
        {shown && (
          <div className="relative">
            <div className="relative min-h-screen aspect-video pl-36 pt-[17%]  text-white z-10 bg-gradient-to-r from-black ">
              <div className="text-5xl font-bold ">{movie.title}</div>
              <div className="w-2/4 pt-4">{movie.overview}</div>
              <div className="flex flex-row gap-5 mt-3">
                <div className="bg-white text-black py-2 px-5 rounded-lg font-bold flex gap-2 hover:bg-opacity-80">
                  <div className="text-xl -translate-y-3/8">▶</div>
                  <div className="text-lg">Play</div>
                </div>
                <div className="bg-gray-700 text-white opacity-570 py-2 px-5 rounded-lg  text-lg hover:bg-opacity-50">
                  More Info
                </div>
              </div>
            </div>
            <div className="absolute w-full  z-0 aspect-video top-0 ">
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
            <div className=" absolute top-1/2 -translate-y-1/2 w-full z-10">
              <div className="flex flex-row justify-between text-3xl text-white">
                <button onClick={handleLeftButton}>◀</button>
                <button onClick={handleRightButton}>▶</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoTitle