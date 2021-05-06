import React from "react";

//Components
import ToDo from "../ToDo";

const ToDoList = ({ list, toggleTaskState }) => {
  if (!list) return <div></div>;
  return (
    <>
      <div>
        {list.map((todo) => {
          return <ToDo todo={todo} key={todo.id} />;
        })}
      </div>
    </>
  );
};

export default ToDoList;
