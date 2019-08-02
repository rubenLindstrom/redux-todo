//NOTE: Reducers specify how the application's state changes in repsonse to actions sent to the store. Distinction: Actions describe WHAT happened, not how it affects the application

import { combineReducers } from "redux";

import todos from "./todoReducer";
import visibilityFilter from "./visibilityReducer";

// För att använda denna syntax är det viktigt att reducern har samma namn som den slice av state den hanterar.
export default combineReducers({
  visibilityFilter,
  todos
});
