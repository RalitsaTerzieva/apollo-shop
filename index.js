import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

 //GraphQL schema - shape of your data and the operations clients can perform
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// Resolvers are functions that implement the logic behind the schema. They tell Apollo Server how to fetch or modify the data for each field defined in your typeDefs.
const resolvers = {
  Query: {
    hello: () => "Hello GraphQL 🚀",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);

