import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: null,
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieTrailer: {},
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer[action.payload.movieId]= action.payload.trailerDetails;
    },
    addNowPlayingMovies: (state,action) =>{
        state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state,action) =>{
        state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state,action) =>{
        state.topRatedMovies= action.payload;
    },
    addUpcomingMovies: (state,action) =>{
        state.upcomingMovies = action.payload;
    },
  },
});
export const {addMovies ,addNowPlayingMovies,addPopularMovies,addTopRatedMovies, addUpcomingMovies,addMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer