import React from "react";
import { ThemeProvider, Box } from "@material-ui/core";
import { outerTheme } from "../../styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Header from "../Header";
import ToDoList from "../ToDoList";
import ToDoForm from "../ToDoForm";
import PageNotFound from "../PageNotFound";
import Footer from "../Footer";

const ToDoApp = () => {
  return (
    <ThemeProvider theme={outerTheme}>
      <Router>
        <Header />
        <Box paddingTop={17}>
          <Switch>
            <Route exact path="/">
              <ToDoList />
            </Route>
            <Route exact path="/new">
              <ToDoForm />
            </Route>
            <Route path="/">
              <PageNotFound />
            </Route>
          </Switch>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default ToDoApp;
