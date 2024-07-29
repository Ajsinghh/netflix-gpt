import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from "./moviesSlice"
import nowPlayingMoviesReducer from "./nowPlayingMoviesSlice"
const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies:moviesReducer,
        nowPlayingMovies:nowPlayingMoviesReducer,
    }
})

export default appStore