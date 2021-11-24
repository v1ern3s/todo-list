import React from "react";

import { TodoCounter } from "./TodoCounter.js"
import { TodoSearch } from "./TodoSearch.js"
import { TodoList } from "./TodoList.js"
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
// import './App.css';
const todos = [
  { text: "Cortar cebolla", complete: false },
  { text: "Tomar curso de buenos habitos en Platzi", complete: false },
  { text: "Llorar con la llorona", complete: false },
];

function App(props) {
  return (
    // React.Fragment evita el uso de tags <div/> para cumplir la regla de enviar un solo elemento y no llenar el DOM de <div/> innecesarios que podrian afectar el CSS
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
