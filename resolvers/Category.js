import data from "../initial-data.js";

const { products } = data;

export const Category = {
  products: (category) => {
    return products.filter(
      product => product.categoryId === category.id
    );
  },
};
