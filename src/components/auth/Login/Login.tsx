import styles from './Login.module.css'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LoginDocument } from '../../../graphql/dist/generated-client'
import { useRouter } from 'next/router'
import { useAuthDispatch } from '../../../store/useAuth'

export const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  const { setAuthPayload } = useAuthDispatch()

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const router = useRouter()
  const [login] = useMutation(LoginDocument, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      setAuthPayload(login)
      router.push('/')
    },
  })

  return (
    <div className={styles.container}>
      <div>
        <input
          type='text'
          name='email'
          placeholder='Your email address'
          value={formState.email}
          onChange={onInputChange}
        />
        <input
          type='text'
          name='password'
          placeholder='Your password'
          value={formState.password}
          onChange={onInputChange}
        />
      </div>
      <button onClick={() => login()}>Login</button>
    </div>
  )
}
