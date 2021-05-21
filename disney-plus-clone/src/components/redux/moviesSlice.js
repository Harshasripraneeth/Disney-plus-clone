import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    recommendations: null,
    latest: null,
    originals: null,
    trending: null,

}

const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers: {
        setMovies: (state, action) =>{

            state.recommendations = action.payload.recommendations
            state.latest = action.payload.latest
            state.originals = action.payload.originals
            state.trending = action.payload.trending
        },
        
    },
})

export const {setMovies} = moviesSlice.actions
export default moviesSlice.reducer
export const selectRecommendations = state => state.movies.recommendations
export const selectLatest = state => state.movies.latest
export const selectOriginals = state => state.movies.originals
export const selectTrending = state => state.movies.trending
