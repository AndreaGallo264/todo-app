import {
  REMOVE_COMPLETED_TASKS,
  ADD_TASK,
  CHANGE_TASK_STATE,
} from "./actionsTypes";

export const removeCompletedTasks = () => ({
  type: REMOVE_COMPLETED_TASKS,
});
export const changeTaskstate = (id) => ({
  type: CHANGE_TASK_STATE,
  payload: id,
});
export const addTask = (newTask) => ({
  type: ADD_TASK,
  payload: {
    new: newTask,
  },
});
