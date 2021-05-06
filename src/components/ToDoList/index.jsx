import React from "react";
import { List, Typography, Grid, Paper, Box } from "@material-ui/core";
import TaskFree from "../../assets/empty.png";
//Components
import ToDo from "../ToDo";

const ToDoList = ({ list }) => {
  return (
    <Grid container direction="column">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3" color="primary" align="center" paragraph>
          Your tasks
        </Typography>
        <Paper elevation={3} style={{ width: "80%" }}>
          {list && (
            <List>
              {list.length > 0 ? (
                <>
                  {list.map((todo) => {
                    return <ToDo todo={todo} key={todo.id} />;
                  })}
                </>
              ) : (
                <Box display="flex" flexDirection="column" alignItems="center">
                  <img src={TaskFree} alt="No more tasks" width="200" />
                  <Typography
                    variant="h3"
                    color="secondary"
                    align="center"
                    paragraph
                  >
                    You have no tasks left!
                  </Typography>
                </Box>
              )}
            </List>
          )}
        </Paper>
      </Box>
    </Grid>
  );
};

export default ToDoList;
