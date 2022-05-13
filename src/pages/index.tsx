import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Layout } from '../components/layout'
import { useAuthState } from '../hooks/useAuth'

const HomePage: NextPage = () => {
  const { authPayload } = useAuthState()
  const router = useRouter()

  useEffect(() => {
    if (authPayload) {
      router.push('/todos')
    }
  }, [authPayload, router])

  return (
    <Layout>
      <p>ログインしてください</p>
    </Layout>
  )
}

export default HomePage
