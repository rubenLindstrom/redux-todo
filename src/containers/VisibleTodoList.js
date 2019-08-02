// NOTE: Syftet med en container är att utföra logiken, för att kunna skicka props till de visuella komponenters, "components". Denna differentiering kallas: "Presentational and Container components", där de tidigare ofta men inte nödvändigtvis är stateless.

// Denna komponent har exempelvis ingen JSX. Dess enda syfte är att förse TodoList med rätt props.

import { connect } from "redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case "SHOW_ALL":  
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter);
  }
}

mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default VisibleTodoList;

