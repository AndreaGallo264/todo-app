import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { useStyles } from "./styles";
//Components
import CalendarInput from "./calendarInput";
import { formatDate } from "../Utils/formatDate";
import FormImg from "../../assets/formImg.jpg";
import { handleChange, handleDateChange, handleSubmit } from "./formHandlers";
import { useHistory } from "react-router-dom";

const ToDoForm = () => {
  const classes = useStyles();
  const today = formatDate("");
  const initialValue = { task: "", dueDate: today };
  const [userInput, setUserInput] = useState(initialValue);
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h3" color="primary">
        Create new
      </Typography>
      <form
        className={classes.formClases}
        onSubmit={(event) => {
          handleSubmit(
            event,
            userInput,
            dispatch,
            setUserInput,
            initialValue,
            history
          );
        }}
      >
        <Card>
          <CardMedia
            image={FormImg}
            title="Contemplative Reptile"
            className={classes.media}
          />
          <CardContent className={classes.inputContainer}>
            <TextField
              value={userInput.task}
              onChange={(event) => {
                handleChange(event, userInput, setUserInput);
              }}
              label="Task"
              name="task"
              required
            />
            <CalendarInput
              selectedDate={userInput.dueDate}
              handleDateChange={(event) => {
                handleDateChange(event, userInput, setUserInput);
              }}
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.addBtn}
            >
              Add
            </Button>
          </CardActions>
        </Card>
      </form>
    </Box>
  );
};

export default ToDoForm;
