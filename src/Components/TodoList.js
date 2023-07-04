// TodoList component is responsible for rendering the list of to-do items.
//import necessary dependencies
import "../CSS/TodoList.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
//the action creators from the todoSlice file.
import { deleteTodo, editTodo, completeTodo } from "../Store/TodoSlice";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

//Inside the component, I define event handlers for deleting, editing, and completing todos.
// These event handlers will dispatch the corresponding actions to update the Redux store
const TodoList = () => {
  const todos = useSelector((state) => state.todo.data); //The component uses the useSelector hook to extract the todos data from the Redux store.
  const dispatch = useDispatch(); //used the useDispatch hook to get the Redux dispatch function.

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleEdit = (id, content) => {
    const newContent = prompt("Enter the new content:", content);
    if (newContent) {
      dispatch(editTodo({ id, content: newContent }));
    }
  };

  const handleComplete = (id) => {
    dispatch(completeTodo({ id }));
  };

  return (
    //component renders an unordered list (ul) where the individual todo items will be rendered.
    <ul>
      {Object.entries(todos).map(([id, todo]) => (
        <li key={id}>
          <div className="content_cover">
            <div className="content_com">
              {todo.content}{" "}
              {todo.completed ? (
                <CheckCircleOutlineIcon fontSize="small" color="success" />
              ) : (
                ""
              )}
            </div>
            {/*conditional statement , display tick icon if the task is completed.*/}
            <div className="content_btn">
              <div className="btn_active">
                <button onClick={() => handleEdit(id, todo.content)}>
                  Edit
                </button>
              </div>

              <div className="btn_active">
                {!todo.completed && (
                  <button onClick={() => handleComplete(id)}>Complete</button>
                )}
              </div>
              <div className="btn_active">
                <DeleteIcon onClick={() => handleDelete(id)} />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
