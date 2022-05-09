import styles from './Login.module.css'
import { useState } from 'react'

export const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
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
      <button>Login</button>
    </div>
  )
}
