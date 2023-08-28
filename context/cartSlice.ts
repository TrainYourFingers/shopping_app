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
      const existingItem = state.cartItems.find(
        (item) => item.id.toString() === newItem.id.toString()
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        //@ts-ignore
        state.cartItems = [...state.cartItems, { ...newItem, quantity: 1 }];
      }
    },
    removeCartItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        //@ts-ignore
        (item) => item.id.toString() !== action.payload.toString()
      );
    },
    decreaseQuantity: (state, action) => {
      let newArray = [];
      state.cartItems.forEach((item) => {
        if (
          item.id.toString() === action.payload.toString() &&
          item.quantity > 1
        ) {
          newArray.push({ ...item, quantity: item.quantity - 1 });
        } else if (
          item.id.toString() === action.payload.toString() &&
          item.quantity === 1
        ) {
          return;
        } else {
          newArray.push(item);
        }
      });
      state.cartItems = newArray;
    },
  },
});

export const { setCartItems, removeCartItems, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
