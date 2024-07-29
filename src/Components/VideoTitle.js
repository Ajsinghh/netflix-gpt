import React from 'react'
import useBackgroundVideo from './Hooks/useBackgroundVideo';

const VideoTitle = ({movie, shown,showIndex,setShowIndex,numOfMovies}) => {
  var movieTrailer = useBackgroundVideo(movie.id);
  
  if (!movieTrailer) return;
  movieTrailer = movieTrailer.filter((ele) => ele.type === "Trailer");

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
    <div className="static">
      <div className="static">
        {shown && (
          <div className="static ">
            <div className="absolute w-screen aspect-video pl-36 pt-[20%]  text-white z-10 bg-gradient-to-r from-black ">
              <div className="text-5xl static font-bold ">{movie.title}</div>
              <div className="w-1/4 static pt-4">{movie.overview}</div>
              <div className="flex flex-row gap-5 mt-3">
                <div className="bg-white text-black py-2 px-5 rounded-lg font-bold flex gap-2 hover:bg-opacity-80">
                   <div className='text-xl -translate-y-3/8'>▶</div>
                   <div className='text-lg'>Play</div>
                </div>
                <div className="bg-gray-700 text-white opacity-570 py-2 px-5 rounded-lg  text-lg hover:bg-opacity-50">
                  More Info 
                </div>
              </div>
            </div>
            <div className="absolute w-screen top-0 z-0">
              <iframe
                className="w-screen aspect-video z-0"
                src={"https://www.youtube.com/embed/" + movieTrailer[0].key+"?autoplay=1&mute=1"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
                
              ></iframe>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 w-screen z-10">
              <div className="flex flex-row justify-between text-3xl ">
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