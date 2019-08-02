// NOTE: Vi använder oss av reducer composition för att låta vår todo-reducer hantera den bit av state den har koll på, listan av todos. Därav är defaultargumentet för state en array.
import { ADD_TODO, TOGGLE_TODO } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((el, index) => {
        if (index === action.index) {
          return {
            ...el,
            completed: !el.completed
          };
        }
        return el;
      });
    default:
      return state;
  }
};
