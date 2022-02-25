import { combineReducers } from "redux";
import popularMovies from "./popularMovies";
import genres from "./genres";
import banners from "./banners";

const rootReducer = combineReducers({ popularMovies, genres, banners })

export default rootReducer