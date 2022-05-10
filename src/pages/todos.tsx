import { NextPage } from 'next'
import { Layout } from '../components/layout'
import { CreateTodo } from '../components/todos/CreateTodo'
import { TodoList } from '../components/todos/TodoList'

const TodosPage: NextPage = () => {
  return (
    <Layout>
      <CreateTodo />
      <TodoList />
    </Layout>
  )
}

export default TodosPage
