import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/* <span>C</span> */}
      {/* <input type="checkbox" /> */}
      <span className={`${props.completed && "TodoItem--completed"}`}>
        {props.text}
      </span>
      <button className="TodoItem__closeButton">X</button>
    </li>
  );
}

export { TodoItem };
