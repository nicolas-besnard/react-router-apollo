import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'
//import { onError } from 'apollo-link-error'

const cache = new InMemoryCache({ addTypename: true })

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
})

const defaults = {}

const resolvers = {
  Mutation: {},
  Query: {}
}

const stateLink = withClientState({
  cache,
  resolvers,
  defaults
})

//const ErrorMiddleware = onError(({ networkError }) => {})

//const authLink = setContext((_, { headers }) => {
//  // get the authentication token from local storage if it exists
//  const token = Authentication.getToken()
//  // return the headers to the context so httpLink can read them
//  return {
//    headers: {
//      ...headers,
//      authorization: token ? `Bearer ${token}` : '',
//    }
//  }
//})

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  connectToDevTools: true,
  cache
})

client.onResetStore(stateLink.writeDefaults)

export default client
