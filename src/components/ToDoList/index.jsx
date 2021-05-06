import React from "react";
import { List, Box } from "@material-ui/core";

//Components
import ToDo from "../ToDo";

const ToDoList = ({ list }) => {
  return (
    <Box
      border={1}
      borderColor="primary.main"
      borderRadius="borderRadius"
      marginTop={2}
    >
      {list && (
        <List>
          {list.map((todo) => {
            return <ToDo todo={todo} key={todo.id} />;
          })}
        </List>
      )}
    </Box>
  );
};

export default ToDoList;
