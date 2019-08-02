import React from "react";
import "./App.css";

import AddTodo from "./containers/AddTodo";
import Footer from "./components/Footer";
import VisibleToDoList from "./containers/VisibleTodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <AddTodo />
      <VisibleToDoList />
      <Footer />
    </div>
  );
}

export default App;
