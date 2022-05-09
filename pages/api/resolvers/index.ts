import { Resolvers, Todo, User } from '../../../graphql/dist/generated-server'

const users: Array<User & { password: string }> = [
  { id: '1', email: 'hoge@email.com', password: 'hogehoge' },
  { id: '2', email: 'foo@email.com', password: 'foofoo' },
  { id: '3', email: 'fuga@email.com', password: 'fugafuga' },
]

let todos: Todo[] = [
  { id: '1', title: 'Todo1', completed: false },
  { id: '2', title: 'Todo2', completed: true },
  { id: '3', title: 'Todo3', completed: false },
]

export const resolvers: Resolvers = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    login: (_, args) => {
      const user = users.find(
        (u) => u.email === args.email && u.password === args.password
      )
      if (!user) {
        throw new Error("User doesn't exist")
      }
      const token = user.id // FIXME
      return {
        token,
        user: { id: user.id, email: user.email },
      }
    },
    createTodo: (_, args) => {
      let newTodo: Todo = {
        id: String(todos.length + 1),
        title: args.title,
        completed: false,
      }
      todos = [...todos, newTodo]
      return newTodo
    },
    toggleTodo: (_, args) => {
      const todo = todos.find((t) => t.id === args.id)
      if (!todo) {
        throw new Error("Todo doesn't exist")
      }
      const updatedTodo = { ...todo, completed: !todo.completed }
      todos = todos.map((t) => {
        if (t.id === args.id) {
          return updatedTodo
        } else {
          return t
        }
      })
      return updatedTodo
    },
    deleteTodo: (_, args) => {
      const deletedTodo = todos.find((t) => t.id === args.id)
      if (!deletedTodo) {
        throw new Error("Todo doesn't exist")
      }
      todos = todos.filter((t) => t.id !== args.id)
      return deletedTodo
    },
  },
}
