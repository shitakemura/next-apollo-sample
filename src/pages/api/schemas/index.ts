import { readFileSync } from 'fs'
import { join } from 'path'

const path = join(process.cwd(), 'src', 'graphql', 'schema.graphql')
export const typeDefs = readFileSync(path).toString('utf8')
