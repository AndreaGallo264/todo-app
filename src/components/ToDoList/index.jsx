import React from "react";
import { List } from "@material-ui/core";

//Components
import ToDo from "../ToDo";

const ToDoList = ({ list }) => {
  if (!list) return <div></div>;
  return (
    <List>
      {list.map((todo) => {
        return <ToDo todo={todo} key={todo.id} />;
      })}
    </List>
  );
};

export default ToDoList;
