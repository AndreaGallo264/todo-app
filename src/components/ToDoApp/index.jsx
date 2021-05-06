import React from "react";
import { connect } from "react-redux";

//Actions
import { removeCompletedTasks, addTask } from "../../store/actions";

//Components
import Header from "../Header";
import ToDoList from "../ToDoList";
import ToDoForm from "../ToDoForm";

const ToDoApp = ({ list, filterCompletedtasks, addNewTask }) => {
  console.log(list);
  return (
    <div>
      <Header />
      <ToDoList list={list} />
      <button onClick={() => filterCompletedtasks()}>
        Filter completed to do items
      </button>
      <ToDoForm addTask={addNewTask} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { list: state.list };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    filterCompletedtasks: () => dispatch(removeCompletedTasks()),
    addNewTask: (newTask) => dispatch(addTask(newTask)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
