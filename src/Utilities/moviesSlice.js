import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: null,
    nowPlayingMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addNowPlayingMovies: (state,action) =>{
        state.nowPlayingMovies = action.payload;
    }
  },
});
export const {addMovies ,addNowPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer