import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        gptSearchState : false,
        movieNames : null,
        movieResults : null,
    },
    reducers : {
        changeGptState : (state)=>{
           state.gptSearchState = !state.gptSearchState
        },
        addGptMovieResult: (state,action) => {
            const {movieNames , movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const {changeGptState , addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer