import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

//Components
import CalendarInput from "./calendarInput";
import { formatDate } from "../Utils/formatDate";

const ToDoForm = ({ addTask }) => {
  const today = formatDate("");
  const initialValue = { task: "", dueDate: today };
  const [userInput, setUserInput] = useState(initialValue);

  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  const handleDateChange = (event) => {
    const formatedDate = formatDate(event._d);
    setUserInput({ ...userInput, dueDate: formatedDate });
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
        <TextField
          value={userInput.task}
          onChange={handleChange}
          label="Task"
          name="task"
          required
        />
        <CalendarInput
          selectedDate={userInput.dueDate}
          handleDateChange={handleDateChange}
        />
        <Button type="submit" variant="outlined" color="primary">
          Add
        </Button>
      </form>
    </>
  );
};

export default ToDoForm;
