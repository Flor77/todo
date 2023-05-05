import React from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {
  const handleCheckboxChange = () => {
    props.completeTodo(props.id);
  };

  const handleDeleteChange = () => {
    props.removeTodo(props.id);
  };

  const handleEditId = () => {
    props.onEdit(props.id);
  };

  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox checked={props.completed} onChange={handleCheckboxChange} />

          <h4>{props.title}</h4>
        </div>
        <div>
          <i
            onClick={handleEditId}
            className="fa fa-pencil"
            aria-hidden="true"
          ></i>
          <i
            onClick={handleDeleteChange}
            className="fa fa-trash"
            aria-hidden="true"
          ></i>
        </div>
      </div>

      <div className="separator"></div>
      <p>{props.description}</p>
    </div>
  );
};

export default TodoItem;
