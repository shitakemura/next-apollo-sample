import { Todo } from '../../graphql/dist/generated-client'

type Props = {
  todo: Todo
}

export const TodoItem = ({ todo }: Props) => {
  return (
    <div>
      <div>
        {todo.title} ({String(todo.completed)})
      </div>
    </div>
  )
}
