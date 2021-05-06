//Mocked data
import data from "../../data.json";
//Action types
import {
  REMOVE_COMPLETED_TASKS,
  ADD_TASK,
  CHANGE_TASK_STATE,
  INCREMENT_ID,
} from "../actions/actionsTypes";
import { changeTaskState, getAllTasks, addNewtask } from "./reducersFunctions";

const initialState = { list: data, lastId: data.length };
const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_COMPLETED_TASKS:
      return getAllTasks(state);
    case CHANGE_TASK_STATE:
      return changeTaskState(state, action.payload);
    case ADD_TASK:
      return addNewtask(state, action.payload);
    case INCREMENT_ID:
      return { ...state, lastId: state.lastId + 1 };
    default:
      return state;
  }
};
export default toDoReducer;
