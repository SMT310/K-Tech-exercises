import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./features/TodoList";
import AddTodo from "./features/AddTodo";

function App() {
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
