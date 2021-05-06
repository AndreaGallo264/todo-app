import React from "react";
import { AppBar, Typography, Box, Button } from "@material-ui/core";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

const Header = ({ filterCompletedtasks }) => {
  return (
    <AppBar position="fixed">
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        padding={2}
      >
        <Typography variant="h3" component="h2">
          <FormatListBulletedIcon fontSize="large" />
          To do App
        </Typography>
        <Button
          onClick={() => filterCompletedtasks()}
          variant="contained"
          color="secondary"
        >
          Filter completed to do items
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
