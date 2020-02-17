import { ApolloServer, gql } from "apollo-server";

const resolvers = {
  Query: {
    health: () => true
  }
};

const typeDefs = gql`
  type Query {
    health: Boolean!
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  // tslint:disable-next-line:no-console
  console.log(`🚀 Server ready at ${url}`);
});
