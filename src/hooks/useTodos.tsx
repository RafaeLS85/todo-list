import { useState } from "react";

export interface Todos {
  id: number;  
  text: string;
  complete: boolean;
}

export const useTodos = () => {
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
    setTodos([{ id: Date.now(), text, complete: false }, ...todos]);

  return {
    todos,
    setTodos,
    toggleComplete,
    handleSubmit,
  };
};
