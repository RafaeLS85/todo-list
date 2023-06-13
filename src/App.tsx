import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

export interface Todos {
  text: string;
  complete: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);

  const toggleComplete = (i: number) =>
    setTodos(
      todos.map((todo, k) =>
        k === i
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      )
    );

  const handleSubmit = (text: string) =>
    setTodos([{ text, complete: false }, ...todos]);

  return (
    <main>
      <h1>Todo List</h1>
      <Form onSubmit={handleSubmit} />
      <TodoList todos={todos} onToggle={toggleComplete} />
      <button onClick={() => setTodos([])}>Reset</button>
    </main>
  );
}

export default App;
