import data from "../initial-data.js";

const { categories } = data;

export const Product = {
  category: (parent) => {
    return categories.find(
      category => category.id === parent.categoryId
    );
  },
};
