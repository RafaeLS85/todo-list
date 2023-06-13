import { Todos } from '../App'


interface Props {
    todos: Todos[],
    onToggle: (index: number) => void
}
export const TodoList = ({todos, onToggle}: Props) => {
  return (
    <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => onToggle(i)}
            style={{
              textDecoration: complete ? "line-through" : "",
            }}
          >
            {text}
          </div>
        ))}
    </div>
  )
}
