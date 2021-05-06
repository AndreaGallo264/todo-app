import React from "react";
import { connect } from "react-redux";
import { Grid, Typography, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { outerTheme } from "../../styles";
import { removeCompletedTasks, addTask } from "../../store/actions";
//Components
import Header from "../Header";
import ToDoList from "../ToDoList";
import ToDoForm from "../ToDoForm";

const ToDoApp = ({ list, filterCompletedtasks, addNewTask }) => {
  return (
    <ThemeProvider theme={outerTheme}>
      <Header filterCompletedtasks={filterCompletedtasks} />
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} direction="column">
          <Box paddingTop={12} px={3}>
            <Typography variant="h3" color="primary">
              Your to dos
            </Typography>
            <ToDoList list={list} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box paddingTop={12}>
            <ToDoForm addTask={addNewTask} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
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
