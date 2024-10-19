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
    favourateMovies:[],
    isFavourate:{},
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
    addFavourateMovies: (state,action) =>{
      state.favourateMovies.push(action.payload);
      state.isFavourate[action.payload.id] = true;
    },
    removeFavourateMovies: (state,action) =>{
      const movieId = action.payload;
      console.log(`Removing movie with id: ${movieId}`);
      state.favourateMovies = state.favourateMovies.filter(
        (movie) => movie.id === action.payload
      );
      delete state.isFavourate[action.payload];
    },
  },
});
export const {addMovies ,addNowPlayingMovies,addPopularMovies,addTopRatedMovies, addUpcomingMovies,addMovieTrailer,addFavourateMovies,removeFavourateMovies} = moviesSlice.actions;
export default moviesSlice.reducer