import "./App.css";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, handleSubmit, setTodos, toggleComplete } = useTodos();

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
