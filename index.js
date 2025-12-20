import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js";
import { Mutation } from "./resolvers/Mutation.js";
import { Category } from "./resolvers/Category.js";
import { Product } from "./resolvers/Product.js";

// Resolvers are functions that implement the logic behind the schema. They tell Apollo Server how to fetch or modify the data for each field defined in your typeDefs.
const resolvers = {
  Query,
  Mutation,
  Category,
  Product
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);

