import { ADD_TODO, TOGGLE_TODO } from "./types";

const add_todo = {
  type: ADD_TODO,
  payload: "Build my first Redux app"
};

const toggle_todo = {
  type: TOGGLE_TODO,
  index: 5
};
