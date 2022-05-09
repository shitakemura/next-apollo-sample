import type { NextPage } from 'next'
import { CreateTodo } from '../components/todos/CreateTodo'
import { TodoList } from '../components/todos/TodoList'

const HomePage: NextPage = () => {
  return (
    <div>
      <h2>Next Apollo Sample App</h2>
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default HomePage
