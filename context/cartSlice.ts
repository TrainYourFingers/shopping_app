import { createSlice } from "@reduxjs/toolkit";
import toast from "../components/common/toast";
import { ITEM } from "../types";

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
      //@ts-ignore
      const existingItem: ITEM = state.cartItems.find(
        (item: ITEM) =>
          item.id.toString() === newItem.id.toString() &&
          item.selectedSize === newItem.selectedSize
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        //@ts-ignore
        state.cartItems = [...state.cartItems, { ...newItem, quantity: 1 }];
      }
      toast.success({
        icon: "check",
      });
    },
    removeCartItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        //@ts-ignore
        (item: ITEM) => {
          if (item.id.toString() !== action.payload.id.toString()) return item;
          else if (
            item.id.toString() === action.payload.id.toString() &&
            item.selectedSize !== action.payload.selectedSize
          )
            return item;
        }
      );
    },
    decreaseQuantity: (state, action) => {
      let newArray: ITEM[] = [];
      state.cartItems.forEach((item: ITEM) => {
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
      //@ts-ignore
      state.cartItems = newArray;
    },
  },
});

export const { setCartItems, removeCartItems, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
