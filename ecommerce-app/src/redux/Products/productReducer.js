import PRODUCT_DATA from "./productData";

const initState = {
  product: PRODUCT_DATA,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default productReducer;
