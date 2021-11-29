import React from "react";
import "./TodoItem.css";


function TodoItem(props) {
  const onClickCompleteTask = () => {
    alert("Has completado la tarea \"" + props.text + "\"");
  }

  const onClickDeleteTask = () => {
    alert("Has eliminado la tarea \"" + props.text + "\"");
  }

  return (
    <li className="TodoItem">
      {/* <span>C</span> */}
      <input type="checkbox"
        onClick={() => onClickCompleteTask()}
      />
      <span className={`${props.completed && "TodoItem--completed"}`}>
        {props.text}
      </span>
      <button className="TodoItem__closeButton"
        onClick={() => onClickDeleteTask()}
      >X</button>
    </li>
  );
}

export { TodoItem };
