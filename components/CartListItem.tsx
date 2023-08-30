import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  removeCartItems,
  setCartItems,
  decreaseQuantity as reduceQuantity,
} from "../context/cartSlice";

const CartListItem = ({ cartItem }: any) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(setCartItems(cartItem));
  };

  const decreaseQuantity = () => {
    dispatch(reduceQuantity(cartItem.id));
  };

  const removeItem = (id: number, selectedSize: number) => {
    dispatch(removeCartItems({ id, selectedSize }));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem?.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.name}>{cartItem?.name}</Text>
            <Text style={styles.size}>Size {cartItem?.selectedSize}</Text>
          </View>
          <Feather
            onPress={() => removeItem(cartItem?.id, cartItem?.selectedSize)}
            name="x-circle"
            size={32}
            color="red"
          />
        </View>
        <View style={styles.footer}>
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem?.quantity}</Text>
          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>${cartItem?.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: "40%",
    aspectRatio: 1,
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
  },
});

export default CartListItem;
