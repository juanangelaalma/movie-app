import { combineReducers } from "redux";
import popularMovies from "./popularMovies";
import genres from "./genres";

const rootReducer = combineReducers({ popularMovies, genres })

export default rootReducer