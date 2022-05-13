import { NextPage } from 'next'
import { Layout } from '../components/layout'
import { CreateTodo } from '../components/todos/CreateTodo'
import { TodoList } from '../components/todos/TodoList'
import { useRequiredLogin } from '../hooks/useRequireLogin'

const TodosPage: NextPage = () => {
  useRequiredLogin()

  return (
    <Layout>
      <CreateTodo />
      <TodoList />
    </Layout>
  )
}

export default TodosPage
