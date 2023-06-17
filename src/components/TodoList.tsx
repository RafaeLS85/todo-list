import { Todos } from "../hooks/useTodos";

interface Props {
  todos: Todos[];
  onToggle: (index: number) => void;
}
export const TodoList = ({ todos, onToggle }: Props) => {
  console.log({todos})
  return (
    <div>
      {todos.map(({ id, text, complete }, i) => (
        <div
          key={id}
          onClick={() => onToggle(i)}
          style={{
            textDecoration: complete ? "line-through" : "",
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};
