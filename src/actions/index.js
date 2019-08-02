//NOTE: Action creators are functions that create actions. Not to be confused with actions themselves.

import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./types";

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const toggleTodo = index => ({
  type: TOGGLE_TODO,
  index
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
