import { Resolvers, Todo } from '../../../graphql/dist/generated-server'

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
    addTodo: (_, args) => {
      let newTodo: Todo = {
        id: String(todos.length + 1),
        title: args.title,
        completed: false,
      }
      todos = [...todos, newTodo]
      return newTodo
    },
  },
}
