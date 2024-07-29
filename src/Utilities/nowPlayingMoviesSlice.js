import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMoviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});
export const { addMovies } = nowPlayingMoviesSlice.actions;
export default nowPlayingMoviesSlice.reducer;