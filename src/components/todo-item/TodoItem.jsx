import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {

  const handleCheckboxChange = () => {
    const matchId = props.id
    props.completeTodo(matchId)
  };

  const handleDeleteChange = () => {
    const matchId = props.id
    props.removeTodo(matchId)
  }; 

  const handleEditId = () => {
    const matchId = props.id
    props.onEdit(matchId)
  };

  

  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={!!props.completed}
            onChange={handleCheckboxChange}
          />

          <h4>{props.title}</h4>
          
        </div>
        <div>
          <i  onClick={handleEditId} className="fa fa-pencil" aria-hidden="true"></i>
          <i onClick={handleDeleteChange} className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>

      <div className="separator"></div>
      <p>{props.description}</p>
    </div>
  );
};

export default TodoItem;
