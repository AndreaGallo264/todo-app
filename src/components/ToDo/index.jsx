import React from "react";
import { useDispatch } from "react-redux";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CancelIcon from "@material-ui/icons/Cancel";
import { changeTaskstate } from "../../store/actions";
import { formatDate } from "../Utils/formatDate";

const ToDo = ({ todo }) => {
  const formatedDate = formatDate(todo.dueDate);
  const dispatch = useDispatch();

  const renderIcon = (completed) => {
    if (completed) {
      return <CheckCircleOutlineIcon color="primary" />;
    } else {
      return <CancelIcon color="secondary" />;
    }
  };
  return (
    <ListItem selected={todo.complete} button>
      <ListItemIcon>{renderIcon(todo.complete)}</ListItemIcon>
      <ListItemText
        onClick={() => {
          dispatch(changeTaskstate(todo.id));
        }}
        primary={todo.task}
        secondary={`Due date: ${formatedDate}`}
      />
    </ListItem>
  );
};

export default ToDo;
