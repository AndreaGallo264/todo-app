import React, { useState } from "react";
import moment from "moment";
const ToDoForm = ({ addTask }) => {
  const today = moment(new Date()).format("yyyy-MM-DD");
  const initialValue = {
    task: "",
    dueDate: today,
  };
  const [userInput, setUserInput] = useState(initialValue);
  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput(initialValue);
  };
  return (
    <>
      <h2>Create new task</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput.task}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
          name="task"
          required
        />
        <input
          type="date"
          name="dueDate"
          value={userInput.dueDate}
          min={today}
          max="2050-01-01"
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ToDoForm;
