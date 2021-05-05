import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState({
    task: "",
    dueDate: new Date(),
  });
  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput({
      task: "",
      dueDate: new Date(),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput.task}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
        name="task"
      />
      <input
        type="date"
        id="start"
        name="dueDate"
        value="2018-07-22"
        min="2018-01-01"
        max="2018-12-31"
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoForm;
