//Mocked data
import data from "../data.json";

const initialState = { list: data };
const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default toDoReducer;
