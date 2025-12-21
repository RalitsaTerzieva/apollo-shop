import { db } from "../initial-data.js";

const { categories, reviews } = db;

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
   avgRating: (product) => {
    const productReviews = reviews.filter(
      review => review.productId === product.id
    );

    if (!productReviews.length) return null;

    const total = productReviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );

    return total / productReviews.length;
  },
};
