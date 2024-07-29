import React from 'react'
import Header from './Header'
import useMovies from './Hooks/useMovies'
import MainContainer from './MainContainer'
const Browse = () => {
  useMovies();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default Browse