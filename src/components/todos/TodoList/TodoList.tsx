import { useQuery } from '@apollo/client'
import { GetTodosDocument } from '../../../graphql/dist/generated-client'
import { TodoItem } from '../TodoItem.tsx'

export const TodoList = () => {
  const { data } = useQuery(GetTodosDocument)

  return (
    <div>
      {data?.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
