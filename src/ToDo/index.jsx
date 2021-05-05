import React from "react";
import moment from "moment";
import "./style.css";

const ToDo = ({ todo, handleToggle }) => {
  const formatedDate = moment(new Date(todo.dueDate)).format("MM/DD/YYYY");
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
      <div>Due date:{formatedDate}</div>
    </>
  );
};

export default ToDo;
