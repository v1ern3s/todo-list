import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickCreateButton = (msg) => {
    alert(msg);
  }

  return (
    <button className="CreateTodoButton" onClick={() => onClickCreateButton('Abriendo modal de creación')}>
      <span className="CreateTodoButton__MobileText">+</span>
      <span className="CreateTodoButton__DesktopText">Agregar tarea +</span>
    </button>
  );
}

export { CreateTodoButton };
