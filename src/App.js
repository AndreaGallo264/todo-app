import React, { useState } from "react";

//Mocked data
import data from "./data.json";

//Components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

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
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      <button onClick={handleFilter}>Filter completed to do items</button>
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
