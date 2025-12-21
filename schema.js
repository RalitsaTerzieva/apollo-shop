 //GraphQL schema - shape of your data and the operations clients can perform
export const typeDefs = `#graphql
  type Query {
    hello: [String!]!
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product!
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Reviews!
    deleteCategory(id: ID!): Boolean
    deleteProduct(id: ID!):Boolean
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
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
    avgRating: Float
  }

  type Reviews {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }

  input ProductsFilterInput {
    onSale: Boolean
    minAvgRating: Float
  }

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`;