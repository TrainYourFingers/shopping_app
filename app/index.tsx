import { View, Image, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import products from "../data/products";
import { Link, Route, router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const ProductScreen = (props: Props) => {
  const handleRouting = (route: string) => {
    router.push(route);
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <MaterialIcons name="menu" size={40} color="black" />
        <MaterialIcons
          name="shopping-cart"
          size={40}
          color="black"
          onPress={() => handleRouting("/ShoppingCart")}
        />
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={styles.itemContainer}
              onPress={() => handleRouting("/ProductDetailScreen")}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
            </Pressable>
          );
        }}
        numColumns={2}
      />
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
  itemContainer: {
    width: "50%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});

export default ProductScreen;
