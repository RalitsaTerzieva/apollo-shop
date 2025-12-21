import { db } from "../initial-data.js";

const { products, categories } = db;

export const Query = {
  hello: () => ["Hello GraphQL 🚀", "We are ready"],

  products: (parent, {filter}, context) => {
    let filteredProducts = products;

    if(filter) {
        if(filter.onSale === true) {
            filteredProducts = filteredProducts.filter(product => {
                return product.onSale;
            })
        }
    }
    return filteredProducts
},

  product: (_, { id }) =>
    products.find(product => product.id === id),

  categories: () => categories,

  category: (_, { id }) =>
    categories.find(category => category.id === id),
};
