//NOTE: Action creators are functions that create actions. Not to be confused with actions themselves.

import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./types";

export const add_todo = text => {
  type: ADD_TODO, text;
};

export const toggle_todo = index => {
  type: TOGGLE_TODO, index;
};

export const toggleVisibility = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
