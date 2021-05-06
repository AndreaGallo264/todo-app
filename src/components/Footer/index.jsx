import React from "react";
import { AppBar, makeStyles, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { DarkTooltip } from "../DarkTooltip";
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -70,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Link to="/new">
        <DarkTooltip title="Add">
          <Fab color="secondary" className={classes.fabButton}>
            <AddIcon />
          </Fab>
        </DarkTooltip>
      </Link>
    </AppBar>
  );
};

export default Footer;
