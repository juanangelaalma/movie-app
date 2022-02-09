import { createStore } from "redux"
import popularMovieReducer from "./reducers/popularMovies"

const store = createStore(
    popularMovieReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store