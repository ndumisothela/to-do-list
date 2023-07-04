// todoSlice file contains the Redux logic for managing the todo state.
import { createSlice } from "@reduxjs/toolkit";

//The createSlice function is used to define a Redux slice, which includes the name, initial state, and reducers.
const todoSlice = createSlice({
  name: "todo",
  //The initialTodoState object represents the initial state of the todo items.
  initialState: {
    nextId: 2,
    data: {
      1: {
        content: "Content 1",
        completed: false,
      },
    },
  },
  //The reducers define how the state should be updated when the corresponding actions are dispatched.
  reducers: {
    //this reducer is respnsible to add new items on the list
    addTodo: (state, action) => {
      const { content } = action.payload; // The action.payload is the data passed when the addTodo action is dispatched.
      const newId = state.nextId; // Assigns the current value of state.nextId to the newId variable. nextId is a property in the state that keeps track of the next available ID for a new todo item
      state.data[newId] = { content, completed: false };
      state.nextId += 1; //increments the state.nextId by 1 to ensure that the next todo item will have a unique ID when added.
    },
    //this reducer is rsponsible for deleting the content from the list of items
    deleteTodo: (state, action) => {
      const { id } = action.payload; //The action.payload is the data passed when the deleteTodo action is dispatched. In this case, the id represents the ID of the todo item to be deleted.
      delete state.data[id]; //Deletes the todo item with the specified id from the state.data object. The 'delete' keyword is used to remove the property from the object.
    },

    //the reducer is rsponsible for editing the content of the state
    editTodo: (state, action) => {
      const { id, content } = action.payload; //the action.payload is the data passed when the editTodo action is dispatched. In this case, id represents the ID of the todo item to be edited, and content represents the new content for that todo item.
      state.data[id].content = content; //Updates the content property of the todo item with the specified id in the state.data object. It assigns the new content value to the corresponding todo item.
    },
    //responsible to indicate when the task is done.
    //Destructures the id property from the action.payload object.
    completeTodo: (state, action) => {
      const { id } = action.payload; //The action.payload is the data passed when the completeTodo action is dispatched. In this case, the id represents the ID of the todo item to be marked as completed.
      state.data[id].completed = true; //sets the completed property to true, indicating that the todo item is completed.show a tick icon
    },
  },
});
//The exported actions can be used to dispatch the corresponding actions in the components.
export const { addTodo, deleteTodo, editTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
//The todoSlice.reducer is the default export and represents the reducer function for the todo slice.
