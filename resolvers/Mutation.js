import { v4 as uuidv4 } from 'uuid';
import data from "../initial-data.js";

const { categories } = data;

export const Mutation = {
    addCategory: (parent, { input }) => {
        const { name } = input;

        const newCategory = {
        id: uuidv4(),
        name,
        };

        categories.push(newCategory);

        return newCategory;
    }
}