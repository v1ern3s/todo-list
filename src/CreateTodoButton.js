import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton">
      <span className="CreateTodoButton__MobileText">+</span>
      <span className="CreateTodoButton__DesktopText">Agregar tarea +</span>
    </button>
  );
}

export { CreateTodoButton };
