import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '../apollo-client'
import { AuthProviderContainer } from '../hooks/useAuth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProviderContainer>
        <Component {...pageProps} />
      </AuthProviderContainer>
    </ApolloProvider>
  )
}

export default MyApp
