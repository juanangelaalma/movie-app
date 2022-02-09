import { SET_POPULAR_MOVIES } from "../actions/type";

const initialState = {hello: ""};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POPULAR_MOVIES: {
      return { popularMovies: action.payload };
    }
    default:
      return state;
  }
}
