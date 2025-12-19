import data from "../initial-data.js";

const { categories, reviews } = data;

export const Product = {
  category: (parent) => {
    return categories.find(
      category => category.id === parent.categoryId
    );
  },
  reviews: (product) => {
    // Return all reviews whose productId matches this product's id
    return reviews.filter(review => review.productId === product.id);
  },
};
