import React from "react";
import { connect } from "react-redux";

//Components
import ToDo from "../ToDo";

const ToDoList = ({ list }) => {
  if (!list) return <div></div>;
  return (
    <>
      <div>
        {list.map((todo) => {
          return (
            <ToDo
              todo={todo}
              handleToggle={() => {} /* props.handleToggle */}
              key={todo.id}
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { list: state.list };
};

export default connect(mapStateToProps)(ToDoList);
