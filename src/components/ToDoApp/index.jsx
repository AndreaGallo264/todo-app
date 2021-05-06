import React from "react";
import { connect } from "react-redux";
import { ThemeProvider, Box } from "@material-ui/core";
import { outerTheme } from "../../styles";
import {
  removeCompletedTasks,
  addTask,
  incrementId,
} from "../../store/actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Header from "../Header";
import ToDoList from "../ToDoList";
import ToDoForm from "../ToDoForm";
import PageNotFound from "../PageNotFound";
import Footer from "../Footer";

const ToDoApp = ({
  list,
  filterCompletedtasks,
  addNewTask,
  incrementLastId,
}) => {
  return (
    <ThemeProvider theme={outerTheme}>
      <Router>
        <Header filterCompletedtasks={filterCompletedtasks} />
        <Box paddingTop={17}>
          <Switch>
            <Route exact path="/">
              <ToDoList list={list} />
            </Route>
            <Route exact path="/new">
              <ToDoForm
                addTask={addNewTask}
                incrementLastId={incrementLastId}
              />
            </Route>
            <Route path="/">
              <PageNotFound />
            </Route>
          </Switch>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return { list: state.list };
};

const mapDispatchToProps = (dispatch) => ({
  filterCompletedtasks: () => dispatch(removeCompletedTasks()),
  addNewTask: (newTask) => dispatch(addTask(newTask)),
  incrementLastId: () => dispatch(incrementId()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
