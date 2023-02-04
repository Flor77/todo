// import React, { useState } from "react";
// import "./TaskCard.css";
// import Card from "../card/Card";
// import Input from "../input/Input";
// import TodoItem from "../todo-item/TodoItem";
// import TextArea from "../input/TextArea";
// import Button from "../button/Button";

// function CreateTaskForm(props) {
//   const [taskTitle, setTaskTitle] = useState("");
//   const [taskDescription, setTaskDescription] = useState("");

//   const handleTitleChange = (e) => {
//     setTaskTitle(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setTaskDescription(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newTaskCard = {
//       title: taskTitle,
//       description: taskDescription
//     };
//     console.log(newTaskCard)
//     setTaskTitle("");
//     setTaskDescription("");
//   };
  

//   return( <Card>
//     <h2>Create Todo</h2>
//     <form onSubmit={handleSubmit}>
//       <Input value={taskTitle} onChange={handleTitleChange} placeholder="Title" type="text" />
//       <TextArea value={taskDescription} onChange={handleDescriptionChange} placeholder="Description" />
//       <Button type="submit">Create</Button>
//     </form>
//   </Card>);
// }

// export default CreateTaskForm