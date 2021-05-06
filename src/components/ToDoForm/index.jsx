import React, { useState } from "react";
import { Button, TextField, Grid, Typography } from "@material-ui/core";

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
    //Checks if date is invalid
    if (!userInput.dueDate.includes("Invalid")) {
      addTask(userInput);
      setUserInput(initialValue);
    }
  };
  return (
    <>
      <Typography variant="h3" color="primary">
        Create a new task
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container item xs={12} md={6} justify="center" direction="column">
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
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default ToDoForm;
