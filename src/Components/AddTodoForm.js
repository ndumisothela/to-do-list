// AddTodoForm component provides a form for adding new todo items.
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../CSS/AddTodoForm.css";
import { addTodo } from "../Store/TodoSlice"; //import the addTodo action creator from the todoSlice file.

const AddTodoForm = () => {
  //The component uses the useState hook to manage the state of the input field (content) for the new todo item.
  const [content, setContent] = useState(""); //declare empty state of content
  const dispatch = useDispatch(); //The useDispatch hook is used to get the Redux dispatch function.

  //The handleSubmit function is called when the form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content) {
      dispatch(addTodo({ content })); //dispatches the addTodo action with the new todo item content, and resets the content state.
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        {/* The input field's value is bound to the content state, and the //
        onChange event updates the content state as the user types.*/}
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>{" "}
        {/*When the form is submitted,the handleSubmit function is called.*/}
      </div>
    </form>
  );
};

export default AddTodoForm;
