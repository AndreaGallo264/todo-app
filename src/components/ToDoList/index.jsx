import React from "react";

//Components
import ToDo from "../ToDo";

const ToDoList = ({ toDoList, handleToggle }) => {
  return (
    <>
      <div>
        {toDoList.map((todo) => {
          return <ToDo todo={todo} handleToggle={handleToggle} key={todo.id} />;
        })}
      </div>
    </>
  );
};

export default ToDoList;
