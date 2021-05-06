import React from "react";
import moment from "moment";
import { connect } from "react-redux";
//Actions
import { changeTaskstate } from "../../store/actions";
import "./style.css";

const ToDo = (props) => {
  const { todo, dispatch } = props;
  const formatedDate = moment(new Date(todo.dueDate)).format("MM/DD/YYYY");
  return (
    <>
      <div
        className={todo.complete ? "strike" : ""}
        onClick={() => {
          dispatch(changeTaskstate(todo.id));
        }}
      >
        {todo.task}
      </div>
      <div>Due date:{formatedDate}</div>
    </>
  );
};

export default connect()(ToDo);
