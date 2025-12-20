import { v4 as uuidv4 } from 'uuid';
import data from "../initial-data.js";

const { categories, products, reviews } = data;

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
    }
}