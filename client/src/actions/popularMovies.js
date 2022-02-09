import { SET_POPULAR_MOVIES } from "./type"

export const setPopularMovies = (movies) => ({
    type: SET_POPULAR_MOVIES,
    payload: movies
})