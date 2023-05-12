import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String!
      age: Int!
      average: Float!
      married: Boolean!
      children: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => 'Hs18E-1sd0',
      name: () => 'Pedro',
      age: () => 28,
      average: () => 80.1,
      married: () => true,
      children: () => ['Ana', 'João'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
