import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed }) => (
  <div className="todo-item-container">
    <li className="add-todo-text">{todo.text}</li>
    <div className="buttons-container">
      <button className="completed-button">Mark As Completed</button>
      <button
        onClick={() => onRemovePressed(todo.text)}
        className="remove-button"
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
