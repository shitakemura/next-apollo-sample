import { Resolvers, Todo } from '../../../graphql/dist/generated-server'

const todos: Todo[] = [
  { id: '1', title: 'Todo1', completed: false },
  { id: '2', title: 'Todo2', completed: true },
  { id: '3', title: 'Todo3', completed: false },
]

export const resolvers: Resolvers = {
  Query: {
    todos: () => todos,
  },
}
