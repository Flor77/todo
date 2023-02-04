import React, { useState } from "react";
import "./AddTodoForm.css"
import Card from "../card/Card";
import Input from "../input/Input";
import TodoItem from "../todo-item/TodoItem";
import TextArea from "../input/TextArea";
import Button from "../button/Button";

function EditTodoForm(props) {
  const [taskTitle, setTaskTitle] = useState(props.initialValues.title);
  const [taskDescription, setTaskDescription] = useState(props.initialValues.description);

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newEditCard = {
      id: props.initialValues.id,
      title: taskTitle,
      description: taskDescription,
      completed: props.initialValues.completed
    };
    
    props.addNewEdit(newEditCard)
    setTaskTitle("");
    setTaskDescription("");
  };
  
  return( <Card>
    <h2>Edit Todo</h2>
    <form onSubmit={handleEdit}>
      <Input value={taskTitle} onChange={handleTitleChange} placeholder="Title" type="text" />
      <TextArea value={taskDescription} onChange={handleDescriptionChange} placeholder="Description" />
      <Button type="submit">Edit</Button>
    </form>
  </Card>);
}

export default EditTodoForm