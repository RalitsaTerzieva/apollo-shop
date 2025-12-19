 //GraphQL schema - shape of your data and the operations clients can perform
export const typeDefs = `#graphql
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
    reviews: [Reviews!]!
  }

  type Reviews {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`;