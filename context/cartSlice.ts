import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  deliveryFee: 30,
  freeDeliveryFrom: 200,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      const newItem = action.payload;
      console.log(newItem);
      //@ts-ignore
      state.cartItems.push({ ...state.cartItems, newItem });
    },
    removeCartItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        //@ts-ignore
        (item) => (item.id !== action.payload.id ? item : null)
      );
    },
  },
});

export const { setCartItems, removeCartItems } = cartSlice.actions;
export default cartSlice.reducer;
