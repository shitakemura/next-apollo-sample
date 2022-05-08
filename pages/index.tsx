import { ApolloProvider } from '@apollo/client'
import type { NextPage } from 'next'
import { client } from '../apollo-client'
import { TodoList } from '../components/TodoList'

const HomePage: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <h2>Next Apollo Sample App</h2>
      <TodoList />
    </ApolloProvider>
  )
}

export default HomePage
