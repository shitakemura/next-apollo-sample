import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from './schemas'
import { getUser, resolvers } from './resolvers'
import { NextApiRequest, NextApiResponse } from 'next'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // ref: https://www.apollographql.com/docs/apollo-server/security/authentication/
  csrfPrevention: true,
  context: ({ req }: { req: NextApiRequest }) => {
    const token = req.headers.authorization?.replace('Bearer ', '') || ''
    const user = getUser(token)
    return { user }
  },
})

const startServer = apolloServer.start()

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // setting to connect Apollo studio
  // ref: https://github.com/vercel/next.js/blob/canary/examples/api-routes-graphql/pages/api/graphql.js
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}
