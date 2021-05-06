import React from "react";
import { connect } from "react-redux";

//MaterialUI
import { Grid, Button, Typography } from "@material-ui/core";
import { removeCompletedTasks, addTask } from "../../store/actions";
//Components
import Header from "../Header";
import ToDoList from "../ToDoList";
import ToDoForm from "../ToDoForm";

const ToDoApp = ({ list, filterCompletedtasks, addNewTask }) => {
  return (
    <>
      <Header />
      <Grid container spacing={1}>
        <Grid container item xs={12} md={6} justify="center" direction="column">
          <Typography variant="h3">Todo List</Typography>
          <ToDoList list={list} />
          <Button
            onClick={() => filterCompletedtasks()}
            variant="outlined"
            color="secondary"
          >
            Filter completed to do items
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <ToDoForm addTask={addNewTask} />
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return { list: state.list };
};

const mapDispatchToProps = (dispatch) => ({
  filterCompletedtasks: () => dispatch(removeCompletedTasks()),
  addNewTask: (newTask) => dispatch(addTask(newTask)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
