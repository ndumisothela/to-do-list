import "./App.css";
import React from "react";
import TodoList from "./Components/TodoList";
import AddTodoForm from "./Components/AddTodoForm";

function App() {
  //The App component renders a div element containing an h1 heading and the TodoList and AddTodoForm components.
  return (
    <div>
      <div className="heading">
        <h1>To Do List App</h1>
        <p>Your accountability partner</p>
      </div>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
