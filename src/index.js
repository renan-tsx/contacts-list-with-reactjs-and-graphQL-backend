import { ApolloServer } from 'apollo-server';
import axios from 'axios';
import { resolvers, typeDefs } from './graphql';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      axios,
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
