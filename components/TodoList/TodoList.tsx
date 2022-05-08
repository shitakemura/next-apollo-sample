import { Todo } from '../../graphql/dist/generated-client'
import { TodoItem } from '../TodoItem.tsx'

export const TodoList = () => {
  const todos: Todo[] = [
    { id: '1', title: 'Todo1', completed: false },
    { id: '2', title: 'Todo2', completed: true },
    { id: '3', title: 'Todo3', completed: false },
  ]

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
