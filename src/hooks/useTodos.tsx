import { useState, useEffect } from "react";

export interface Todos {
  id: number;
  text: string;
  complete: boolean;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todos[]>(
    JSON.parse(window.localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    setLocalStorage(todos);
  }, [todos]);

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

  const handleSubmit = (text: string) => {
    const newTodo = { id: Date.now(), text, complete: false };
    setTodos([newTodo, ...todos]);
  };

  const setLocalStorage = (value: Todos[]) => {
    try {
      window.localStorage.setItem("todos", JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  return {
    state: { todos },
    actions: { setTodos, toggleComplete, handleSubmit },
  };
};
