import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";

interface Todos {
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

  return (
    <>
      Todo App
      <Form
        onSubmit={(text: string) =>
          setTodos([{ text, complete: false }, ...todos])
        }
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : "",
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>Reset</button>
    </>
  );
}

export default App;
