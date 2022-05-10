import styles from './Login.module.css'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LoginDocument } from '../../../graphql/dist/generated-client'
import { useRouter } from 'next/router'

export const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  const router = useRouter()
  const [login] = useMutation(LoginDocument, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      router.push('/')
    },
  })

  return (
    <div className={styles.container}>
      <div>
        <input
          type='text'
          placeholder='Your email address'
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
        />
        <input
          type='text'
          placeholder='Your password'
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
      </div>
      <button onClick={() => login()}>Login</button>
    </div>
  )
}
