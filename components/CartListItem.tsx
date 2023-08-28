import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeCartItems } from "../context/cartSlice";

const CartListItem = ({ cartItem }: any) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {};

  const decreaseQuantity = () => {};

  const removeItem = () => {
    dispatch(removeCartItems(cartItem.newItem.id));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.newItem.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.name}>{cartItem.newItem.name}</Text>
            <Text style={styles.size}>Size {cartItem.newItem.size}</Text>
          </View>
          <Feather onPress={removeItem} name="x-circle" size={32} color="red" />
        </View>
        <View style={styles.footer}>
          <Feather
            onPress={increaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem.newItem.quantity}</Text>
          <Feather
            onPress={decreaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>${cartItem.newItem.price}</Text>
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
