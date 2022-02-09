import { SET_GENRES } from "./type";

export const setGenres = (genres) => ({
  type: SET_GENRES,
  payload: genres
})