import React from "react";
import "./style.css";

const ToDo = ({ todo, handleToggle }) => {
  return (
    <div
      className={todo.complete ? "strike" : ""}
      onClick={() => {
        handleToggle(todo.id);
      }}
    >
      {todo.task}
    </div>
  );
};

export default ToDo;
