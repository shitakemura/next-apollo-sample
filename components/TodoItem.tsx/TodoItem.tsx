import { Todo } from '../../graphql/dist/generated-client'

type Props = {
  todo: Todo
}

export const TodoItem = ({ todo }: Props) => {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => {
            console.log(`clicked: ${todo.id}`)
          }}
        />
        {todo.title}
      </label>
    </div>
  )
}
