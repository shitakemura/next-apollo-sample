import { gql, useMutation } from '@apollo/client'
import { useCallback, useState } from 'react'
import { CreateTodoDocument } from '../../graphql/dist/generated-client'

export const CreateTodo = () => {
  const [title, setTitle] = useState('')
  const [createTodo] = useMutation(CreateTodoDocument, {
    variables: {
      title,
    },
    // update the cache directly
    // ref: https://www.apollographql.com/docs/react/data/mutations/#updating-the-cache-directly
    update(cache, data) {
      const newTodo = data.data?.addTodo
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: newTodo,
              fragment: gql`
                fragment NewTodo on Todo {
                  id
                  title
                  completed
                }
              `,
            })
            return [...existingTodos, newTodoRef]
          },
        },
      })
    },
  })

  const handleOnClick = useCallback(() => {
    createTodo()
    setTitle('')
  }, [createTodo])

  return (
    <div>
      <input
        type='text'
        placeholder='A title for the Todo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleOnClick}>Add</button>
    </div>
  )
}
