import React from "react";
import { List, Typography, Grid } from "@material-ui/core";
//Components
import ToDo from "../ToDo";

const ToDoList = ({ list }) => {
  return (
    <Grid container direction="column">
      <Typography variant="h3" color="primary" align="center">
        Your to dos
      </Typography>
      {list && (
        <List>
          {list.map((todo) => {
            return <ToDo todo={todo} key={todo.id} />;
          })}
        </List>
      )}
    </Grid>
  );
};

export default ToDoList;
