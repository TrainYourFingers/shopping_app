import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import ShoppingCartTotals from "../components/ShoppingCartTotals";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const ShoppingCart = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => <ShoppingCartTotals />}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "80%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
