import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";
import { router } from "expo-router";

const initialState = {
  products,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state: any, action: any) => {
      state.selectedProduct = state.products.find(
        //@ts-ignore
        (item) => item.id === action.payload
      );
      router.push("/ProductDetailScreen");
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
