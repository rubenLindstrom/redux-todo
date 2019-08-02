import { SET_VISIBILITY_FILTER } from "./types";

export default (state = SHOW_ALL, action) => {
  switch (action) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
