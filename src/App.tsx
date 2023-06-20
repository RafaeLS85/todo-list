import { Button } from "./components/Button.styles";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import { Container } from "./layout/Container";

function App() {
  const { state, actions } = useTodos();

  return (
    <main>
      <Container>
        <h1>Todo List</h1>
        <Form onSubmit={actions.handleSubmit} />
        <TodoList todos={state.todos} onToggle={actions.toggleComplete} />
        <Button onClick={() => actions.setTodos([])}>Reset</Button>
      </Container>
    </main>
  );
}

export default App;
