export const changeTaskState = (state, payload) => ({
  ...state,
  list: state.list.map((task) => {
    return task.id === payload
      ? { ...task, complete: !task.complete }
      : { ...task };
  }),
});

export const getAllTasks = (state) => ({
  ...state,
  list: state.list.filter((task) => !task.complete),
});

export const addNewtask = (state, payload) => ({
  ...state,
  list: [
    ...state.list,
    {
      id: state.list.length + 1,
      task: payload.new.task,
      complete: false,
      dueDate: payload.new.dueDate,
    },
  ],
});
