import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../context/cartSlice";
import Toaster from "../components/common/Toaster";
import { useState } from "react";

type Props = {};

const ProductDetailScreen = (props: Props) => {
  //@ts-ignore
  const product = useSelector((state) => state.product.selectedProduct);
  const [size, setSize] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [active, setActive] = useState<any>(null);

  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const addItem = () => {
    dispatch(setCartItems({ ...product, selectedSize: size }));
  };

  const sizeSelection = (size: number) => {
    setDisabled(false);
    setSize(size);
    setActive(size);
  };

  return (
    <View>
      <Toaster />
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => {
            return (
              <Image
                source={{ uri: item }}
                style={{ width: width > 700 ? 700 : width, aspectRatio: 1 }}
              />
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        />
        <View style={{ padding: 20, paddingBottom: 100 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            {product.sizes.map((item: any, index: number) => (
              <Pressable
                key={index}
                style={
                  active === item
                    ? styles.pressedButton
                    : styles.unpressedButton
                }
                onPress={() => sizeSelection(item)}
              >
                <Text>{item}</Text>
              </Pressable>
            ))}
          </View>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable
        style={disabled ? styles.disabledButton : styles.button}
        onPress={addItem}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 2,
  },
  description: {
    fontSize: 18,
    marginVertical: 10,
    lineHeight: 30,
    fontWeight: "300",
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
  disabledButton: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "80%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    opacity: 0.75,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  unpressedButton: {
    backgroundColor: "white",
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  pressedButton: {
    backgroundColor: "lightblue",
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
});

export default ProductDetailScreen;
