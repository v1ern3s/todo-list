import React from "react";

import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import "./App.css";
import logo from "./notebook.png";
const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar curso de buenos habitos en Platzi", completed: false },
  { text: "Llorar con la llorona", completed: true },
];

function App(props) {
  return (
    // React.Fragment evita el uso de tags <div/> para cumplir la regla de enviar un solo elemento y no llenar el DOM de <div/> innecesarios que podrian afectar el CSS
    <React.Fragment>
      <div className="TodoContainer">
        <img className="TodoLogo" src={logo} alt="Logo" />
        <TodoCounter className="TodoCounter" />
        <TodoSearch className="TodoSearch" />
        <TodoList className="TodoList">
          {todos.map((todo) => (
            <TodoItem className="TodoItem"
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              />
          ))}
        </TodoList>
        <CreateTodoButton className="CreateTodoButton" />
      </div>
    </React.Fragment>
  );
}
export default App;
