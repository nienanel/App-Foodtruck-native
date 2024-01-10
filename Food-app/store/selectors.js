import { createSelector } from "reselect";

const selectItems = state => state.categories.items
const selectSelectedCategory = state => state.categories.selectedCategory

export const selectItemByCategory = createSelector(
    [selectItems, selectSelectedCategory],
    (items, selectedCategory) => items.filter(item => item.category === selectedCategory)
);