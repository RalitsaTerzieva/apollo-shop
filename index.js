import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import data from './initial-data.js';

const {products, categories} = data;

 //GraphQL schema - shape of your data and the operations clients can perform
const typeDefs = `#graphql
  type Query {
    hello: [String!]!
    products: [Product!]!
    product(id: ID!): Product!
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
 
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int
    image: String
    price: Float!
    onSale: Boolean!
    category: Category
  }
`;

// Resolvers are functions that implement the logic behind the schema. They tell Apollo Server how to fetch or modify the data for each field defined in your typeDefs.
const resolvers = {
  Query: {
    hello: () => ["Hello GraphQL 🚀", "We are ready"],
    products: () => {
        return products;
    },
    product: (_, args) => {
      const { id } = args;
      return products.find(product => product.id === id);
    },
    categories: () => {
        return categories;
    },
    category: (_, args) => {
        const { id } = args;
        return categories.find(category => category.id === id);
    }
  },
  Category: {
    products: (category) => {
      // Return all products that belong to this category
      // For now, let's assume we add a categoryId field to products
      return products.filter(product => product.categoryId === category.id);
    },
  },
  Product: {
    category: (parent, args, context) => {
        const categoryId = parent.categoryId;
        return categories.find(category => category.id === categoryId);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);

