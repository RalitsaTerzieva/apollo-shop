import data from "../initial-data.js";

const { products } = data;

export const Category = {
  products: (category, { filter }) => {
    const categoryProducts = products.filter(
      product => product.categoryId === category.id
    );
    let filteredProducts = categoryProducts;
    
    if(filter) {
        if(filter.onSale === true) {
            filteredProducts = filteredProducts.filter(product => {
                return product.onSale;
            })
        }
    }
    return filteredProducts
  },
};
