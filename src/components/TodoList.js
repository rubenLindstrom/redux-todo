import React from "react";
import PropTypes from "prop-types";

export default function TodoList({ todos, onTodoClick }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  ontodoClick: PropTypes.func.isRequired
};

export default TodoList;