import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoAppReducers from "./reducers";
export default createStore(todoAppReducers, composeWithDevTools());
