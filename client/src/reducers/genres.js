import { SET_GENRES } from "../actions/type";

const initialState = []

export default function (state = initialState, action) {
  switch(action.type){
    case SET_GENRES:
      return [ ...action.payload ]
    default:
      return state
  }
}