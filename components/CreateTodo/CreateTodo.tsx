import { useMutation } from '@apollo/client'
import { useCallback, useState } from 'react'
import { CreateTodoDocument } from '../../graphql/dist/generated-client'

export const CreateTodo = () => {
  const [title, setTitle] = useState('')
  const [createTodo] = useMutation(CreateTodoDocument, {
    variables: {
      title,
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
