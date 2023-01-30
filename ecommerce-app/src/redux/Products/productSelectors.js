import { createSelector } from "reselect";

const selectProducts = (state) => state.products;

export const selectProductItems = createSelector(
  [selectProducts],
  (products) => products.product
);
