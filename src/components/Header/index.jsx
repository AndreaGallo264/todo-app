import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.5rem",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar>
        <Typography variant="h3" component="h2" className={classes.title}>
          <FormatListBulletedIcon fontSize="large" />
          To do App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
