import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { CreateTodo } from '../components/todos/CreateTodo'
import { TodoList } from '../components/todos/TodoList'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <CreateTodo />
      <TodoList />
    </Layout>
  )
}

export default HomePage
