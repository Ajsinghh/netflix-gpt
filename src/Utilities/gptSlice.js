import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "./openai";
import { API_OPTION } from "./constants";


// export const fetchMovies = createAsyncThunk("", async (gptQuery) => {
//   const gptResults = await client.chat.completions.create({
//     messages: [{ role: "user", content: gptQuery }],
//     model: "gpt-3.5-turbo",
//   });
//   const searchedMovies = async (movie) => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/search/movie?query=" +
//         movie +
//         "&include_adult=false&language=en-US&page=1",
//       API_OPTION
//     );
//     const json = await data.json();
//     return json.results;
//   };
//   const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

//   const promiseArray = gptMovies.map((movie) => searchedMovies(movie));

//   const tmdbResults = Promise.all(promiseArray);
//   return tmdbResults;
// });


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
    },
    // extraReducers:(builder) =>{
    //     builder.addCase(fetchMovies.fulfilled,(state,action) =>{
    //         const {movieNames , movieResults} = action.payload;
    //         state.movieNames = movieNames;
    //         state.movieResults = movieResults;

    //     })
    //}
})



export const {changeGptState , addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer