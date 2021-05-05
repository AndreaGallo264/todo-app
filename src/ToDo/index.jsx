import React from "react";
import "./style.css";

const ToDo = ({ todo, handleToggle }) => {
  return (
    <>
      <div
        className={todo.complete ? "strike" : ""}
        onClick={() => {
          handleToggle(todo.id);
        }}
      >
        {todo.task}
      </div>
      <div>{todo.dueDate}</div>
    </>
  );
};

export default ToDo;
