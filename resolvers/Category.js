import { db } from "../initial-data.js";

const { products, reviews } = db;

function getAverageRating(productId) {
  const productReviews = reviews.filter(
    review => review.productId === productId
  );

  if (!productReviews.length) return null;

  const total = productReviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );

  return total / productReviews.length;
}

export const Category = {
  products: (category, { filter }) => {
    let filteredProducts = products.filter(
      product => product.categoryId === category.id
    );

    if (filter?.onSale === true) {
      filteredProducts = filteredProducts.filter(
        product => product.onSale
      );
    }

    if (filter?.minAvgRating !== undefined) {
      filteredProducts = filteredProducts.filter(product => {
        const avg = getAverageRating(product.id);
        return avg !== null && avg >= filter.minAvgRating;
      });
    }

    return filteredProducts;
  },
};
