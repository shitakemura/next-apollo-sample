import { ApolloProvider } from '@apollo/client'
import type { NextPage } from 'next'
import { client } from '../apollo-client'

const HomePage: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <h2>Next Apollo Sample App</h2>
    </ApolloProvider>
  )
}

export default HomePage
