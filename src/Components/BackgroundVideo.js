import React from "react";
import useBackgroundVideo from "./Hooks/useBackgroundVideo";

const BackgroundVideo = ({
  movie,
  shown,
  showIndex,
  setShowIndex,
  numOfMovies,
}) => {

  
  return(
     <div>
        {shown && (
            <div></div>
        )}
     </div>
    );
};

export default BackgroundVideo;
