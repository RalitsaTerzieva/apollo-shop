import data from "../initial-data.js";

const { products, categories } = data;

export const Query = {
  hello: () => ["Hello GraphQL 🚀", "We are ready"],

  products: () => products,

  product: (_, { id }) =>
    products.find(product => product.id === id),

  categories: () => categories,

  category: (_, { id }) =>
    categories.find(category => category.id === id),
};
