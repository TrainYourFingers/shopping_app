import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  Text,
  useWindowDimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { setProduct } from "../context/productSlice";
import { ITEM } from "../types";
import { useState } from "react";

type Props = {};

const ProductScreen = (props: Props) => {
  const handleRouting = (route: string) => {
    //@ts-ignore
    router.push(route);
  };
  //@ts-ignore
  const products = useSelector((state): ITEM => state.product.products);
  //@ts-ignore
  const cartItems = useSelector((state): ITEM => state.cart.cartItems);
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <MaterialIcons
          name="menu"
          size={40}
          color="black"
          onPress={() => handleRouting("/MenuModal")}
        />
        <Pressable onPress={() => handleRouting("/ShoppingCart")}>
          <View style={styles.redCircle}>
            <Text style={styles.redCircleText}>{cartItems.length}</Text>
          </View>
          <MaterialIcons
            name="shopping-cart"
            size={40}
            color="black"
            style={{ position: "relative" }}
          />
        </Pressable>
      </View>
      <View style={styles.flatlist}>
        <FlatList
          data={products}
          renderItem={({ item }) => {
            return (
              <Pressable
                style={{ width: width > 600 ? "33.33%" : "50%" }}
                onPress={() => dispatch(setProduct(item.id))}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
              </Pressable>
            );
          }}
          numColumns={width > 600 ? 3 : 2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  redCircle: {
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    height: 20,
    aspectRatio: 1,
    borderRadius: 50,
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  redCircleText: {
    color: "white",
    fontWeight: "bold",
  },
  flatlist: {
    paddingBottom: 100,
  },
});

export default ProductScreen;
