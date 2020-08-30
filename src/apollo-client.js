import { ApolloClient, createNetworkInterface }
  from 'apollo-client'

// Create the apollo client
// with a network interface
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
		uri: 'http://localhost:3000/graphql',
    transportBatching: true,
  }),
  connectToDevTools: true,
})

export default apolloClient
