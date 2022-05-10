import { NextPage } from 'next'
import { Layout } from '../components/layout'
import { Login } from '../components/auth/Login'

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}

export default LoginPage
