import { v4 as uuidv4 } from 'uuid';
import { db } from "../initial-data.js";

const { products, reviews, categories } = db;

export const Mutation = {
    addCategory: (parent, { input }) => {
        const { name } = input;

        const newCategory = {
        id: uuidv4(),
        name,
        };

        categories.push(newCategory);

        return newCategory;
    },
    addProduct: (parent, { input }) => {
        const { name, description } = input;

        const newProduct = {
            id: uuidv4(),
            name,
            description
        };

        products.push(newProduct);

        return newProduct;
    },
    addReview: (parent, { input }) => {
        const { date, title, comment, rating, productId } = input;

        const newReview = {
            id: uuidv4(),
            date,
            title,
            comment,
            rating,
            productId
        };

        reviews.push(newReview);

        return newReview;
    },
    deleteCategory: (parent, { id }) => {
    const index = categories.findIndex(
        category => category.id === id
    );

    if (index === -1) {
        return false;
    }

    // Remove category reference from products
    db.products = db.products.map(product => {
        if (product.categoryId === id) {
            return {
                ...product,
                categoryId: null
            };
        } else {
            return product;
            }
        });

    // Remove category itself
    categories.splice(index, 1);

    return true;
    },
    deleteProduct: (parent, { id }) => {
        const index = products.findIndex(
            product => product.id === id
        );

        if (index === -1) {
            return false;
        }

        products.splice(index, 1);

        return true;
    },
    deleteReview: (parent, { id }) => {
         const index = reviews.findIndex(
            review => review.id === id
        );

        if (index === -1) {
            return false;
        }

        reviews.splice(index, 1);

        return true;
    },
    updateCategory: (parent, { id, input }) => {
        const index = categories.findIndex(category => category.id === id);
        categories[index] = {
            ...categories[index],
            ...input
        }
        return categories[index];
    },
    updateProduct: (parent, { id, input }) => {
        const index = products.findIndex(product => product.id === id);
        products[index] = {
            ...products[index],
            ...input
        }

        return products[index];
    },
    updateReview: (parent, { id, input}) => {
        const index = reviews.findIndex(review => review.id === id);
        reviews[index] = {
            ...reviews[index],
            ...input
        }

        return reviews[index]
    }
}