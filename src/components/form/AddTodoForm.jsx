import React, { useState } from "react";
import Card from "../card/Card";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";

function AddTodoForm(props) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).slice(2, 10);
    const newTaskCard = {
      id: id,
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };

    props.addNewTask(newTaskCard);
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <Card>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <Input
          value={taskTitle}
          onChange={handleTitleChange}
          placeholder="Title"
          type="text"
        />
        <TextArea
          value={taskDescription}
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <Button type="submit">Create</Button>
      </form>
    </Card>
  );
}

export default AddTodoForm;
