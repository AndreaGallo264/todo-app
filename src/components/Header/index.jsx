import React from "react";
import { AppBar, Typography, Box, Button } from "@material-ui/core";
import { useLocation, Link } from "react-router-dom";

const Header = ({ filterCompletedtasks }) => {
  let location = useLocation();
  return (
    <AppBar position="fixed">
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        padding={2}
      >
        <Link to="/">
          <Typography variant="h3" component="h2" color="secondary">
            To do App
          </Typography>
        </Link>
        {location.pathname === "/" && (
          <Button
            onClick={() => filterCompletedtasks()}
            variant="contained"
            color="secondary"
          >
            Filter completed tasks
          </Button>
        )}
      </Box>
    </AppBar>
  );
};

export default Header;
