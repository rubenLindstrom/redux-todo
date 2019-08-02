//NOTE: Reducers specify how the application's state changes in repsonse to actions sent to the store. Distinction: Actions describe WHAT happened, not how it affects the application

import { VisibilityFilters } from "../constants";
import todoReducer from "./todoReducer";
import visibilityReducer from "./visibilityReducer";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state = initialState, action) {
  return {
    visibilityFilter: visibilityReducer(state.visibilityFilter, action),
    todos: todoReducer(state.todos, action)
  };
}
