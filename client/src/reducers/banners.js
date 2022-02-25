import { SET_BANNERS } from "../actions/type";

const initialState = []

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_BANNERS:
      return [ ...action.payload ]
    default:
      return state
  }
}