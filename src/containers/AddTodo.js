import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

let AddTodo = ({ dispatch }) => {
  let input;

  const onSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addTodo(input.value));
    input.value = "";
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
