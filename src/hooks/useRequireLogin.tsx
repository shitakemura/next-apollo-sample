import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuthState } from './useAuth'

// ログインが必要なページ用、ログインしていない場合はログインページにリダイレクトする
// ref: https://zenn.dev/catnose99/articles/2169dae14b58b6#3.-%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%AA%E3%83%9A%E3%83%BC%E3%82%B8%E7%94%A8%E3%81%AE%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%95%E3%83%83%E3%82%AF%E3%82%92%E4%BD%9C%E3%82%8B
export function useRequiredLogin() {
  const { authPayload } = useAuthState()
  const router = useRouter()

  useEffect(() => {
    if (!authPayload) router.push('/login')
  }, [authPayload, router])
}
