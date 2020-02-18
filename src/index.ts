import { ApolloServer, gql } from "apollo-server";

import insertFeedingLog from "./resolvers/insertFeedingLog";
import feedingLogs from "./resolvers/feedingLogs";

const resolvers = {
  Mutation: {
    insertFeedingLog
  },
  Query: {
    feedingLogs,
    feedingLogById: () => null
  }
};

const typeDefs = gql`
  enum FoodCategory {
    ANIMAL
    PLANT
  }

  type FeedingLog {
    id: ID!

    dateTime: String!
    location: String!
    howMany: Int!
    foodCategory: FoodCategory
    food: String!
    foodQuantity: Int!

    createdAt: String!
    updatedAt: String!
  }

  input InsertFeedingLogInput {
    dateTime: String!
    location: String!
    howMany: Int!
    foodCategory: FoodCategory
    food: String!
    foodQuantity: Int!
  }

  type Mutation {
    insertFeedingLog(input: InsertFeedingLogInput): FeedingLog
  }

  type Query {
    feedingLogs: [FeedingLog]!
    feedingLogById(id: Int!): FeedingLog
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  // tslint:disable-next-line:no-console
  console.log(`🚀 Server ready at ${url}`);
});
