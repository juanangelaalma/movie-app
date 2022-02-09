import { SET_POPULAR_MOVIES } from "../actions/type";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POPULAR_MOVIES: {
      return [ ...action.payload ];
    }
    default:
      return state;
  }
}
