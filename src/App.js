import React from "react";
import { Provider } from "react-redux";
import store from "./store";

//Components
import ToDoApp from "./components/ToDoApp";

function App() {
  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  );
}

export default App;
