import { useState } from 'react'

export const CreateTodo = () => {
  const [title, setTitle] = useState('')

  return (
    <div>
      <input
        type='text'
        placeholder='A title for the Todo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => {}}>Add</button>
    </div>
  )
}
