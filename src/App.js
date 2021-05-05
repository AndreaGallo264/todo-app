import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";

//Mocked data
import data from "./data.json";

//Components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [toDoList, setToDoList] = useState(data);
  const handleToggle = (id) => {
    const mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [
      ...toDoList,
      {
        id: toDoList.length + 1,
        task: userInput.task,
        complete: false,
        dueDate: userInput.dueDate,
      },
    ];
    setToDoList(copy);
  };
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ToDoList handleToggle={handleToggle} />
        <button onClick={handleFilter}>Filter completed to do items</button>
        <ToDoForm addTask={addTask} />
      </div>
    </Provider>
  );
}

export default App;
