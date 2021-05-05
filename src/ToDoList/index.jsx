import React from "react";

//Components
import ToDo from "../ToDo";

const ToDoList = ({ toDoList, handleToggle }) => {
  return (
    <>
      <h1>To do list component</h1>
      <div>
        {toDoList.map((todo) => {
          return <ToDo todo={todo} handleToggle={handleToggle} />;
        })}
      </div>
    </>
  );
};

export default ToDoList;
