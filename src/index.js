import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }
    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'H1d55-asll',
          userName: 'Pedro',
        };
      },
      users: () => {
        return [
          {
            id: 'H1d55-asll',
            userName: 'Pedro',
          },
          {
            id: '9Jks2-1597',
            userName: 'Maria',
          },
          {
            id: 'aklP-5l0i',
            userName: 'José',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
