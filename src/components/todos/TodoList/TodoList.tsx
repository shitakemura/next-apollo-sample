import { useQuery } from '@apollo/client'
import { GetTodosDocument } from '../../../graphql/dist/generated-client'
import { useAuthState } from '../../../hooks/useAuth'
import { TodoItem } from '../TodoItem.tsx'

export const TodoList = () => {
  const { authPayload } = useAuthState()
  const token = authPayload?.token ?? ''

  const { data } = useQuery(GetTodosDocument, {
    context: {
      headers: { authorization: `Bearer ${token}` },
    },
  })

  return (
    <div>
      {data?.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
