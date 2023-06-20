import { useState, useEffect } from "react";

export interface Todos {
  id: number;
  text: string;
  complete: boolean;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todos[]>(() => {
    try {
      const items = JSON.parse(window.localStorage.getItem("todos") || "")
      return items ? items : [];
    }catch(e){
      console.error(e);
      return [] 
    }
  }
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
    setTodos([{ id: Date.now(), text, complete: false }, ...todos]);
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
