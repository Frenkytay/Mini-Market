import {PayloadAction, createSlice, nanoid} from '@reduxjs/toolkit';

export type ProductState = {
  myProduct: {
    productId: string;
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
  }[];
};
const initialState: ProductState = {
  myProduct: [],
};
export const productSlice = createSlice({
  name: 'myProduct',
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{
        productId: string;
        id: string;
        image: string;
        title: string;
        price: number;
        description: string;
      }>,
    ) => {
      //   action.payload.productId = nanoid();
      const product = action.payload;
      product.productId = nanoid();
      state.myProduct.push(product);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.myProduct = state.myProduct.filter(
        f => f.productId !== action.payload,
      );
    },
  },
});
export const {add, remove} = productSlice.actions;
const myProductReducer = productSlice.reducer;
export default myProductReducer;
