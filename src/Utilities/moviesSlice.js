import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        movies: null,
    },
    reducers:{
        addMovies: (state,action)=>{
             state.movies = action.payload;
        }
    }
})
export const {addMovies} = moviesSlice.actions;
export default moviesSlice.reducer