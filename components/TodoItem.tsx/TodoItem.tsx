import { useMutation } from '@apollo/client'
import {
  DeleteTodoDocument,
  Todo,
  ToggleTodoDocument,
} from '../../graphql/dist/generated-client'

type Props = {
  todo: Todo
}

export const TodoItem = ({ todo }: Props) => {
  const [toggleTodo] = useMutation(ToggleTodoDocument, {
    variables: {
      id: todo.id,
    },
  })

  const [deleteTodo] = useMutation(DeleteTodoDocument, {
    variables: {
      id: todo.id,
    },
    update(cache, data) {
      const deletedTodo = data.data?.deleteTodo
      cache.modify({
        fields: {
          todos(existingTodos = [], { readField }) {
            const newTodoRef = existingTodos.filter(
              (todo: Todo) => readField('id', todo) !== deletedTodo?.id
            )
            return [...newTodoRef]
          },
        },
      })
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
      <button onClick={() => deleteTodo()}>🗑</button>
    </div>
  )
}
