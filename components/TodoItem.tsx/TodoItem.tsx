import { useMutation } from '@apollo/client'
import { Todo, ToggleTodoDocument } from '../../graphql/dist/generated-client'

type Props = {
  todo: Todo
}

export const TodoItem = ({ todo }: Props) => {
  const [toggleTodo] = useMutation(ToggleTodoDocument, {
    variables: {
      id: todo.id,
    },
  })

  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleTodo()}
        />
        {todo.title}
      </label>
    </div>
  )
}
