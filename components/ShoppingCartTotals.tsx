import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

type Props = {};

const ShoppingCartTotals = (props: Props) => {
  const delivery = 30;
  //@ts-ignore
  const cartItem = useSelector((state) => state.cart.cartItems);

  const subTotal = useMemo(() => {
    return cartItem.reduce((acc, item) => acc + item?.quantity * item.price, 0);
  }, [cartItem]);

  const total = useMemo(() => {
    return subTotal + delivery;
  }, [subTotal]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>${subTotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>$30.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>${subTotal === 0 ? 0 : total}</Text>
      </View>
    </View>
  );
};

export default ShoppingCartTotals;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingTop: 20,
    borderTopWidth: 2,
    borderColor: "#e0e0e0",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    color: "gray",
  },
  textBold: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
  },
});
