import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Pressable } from "react-native";
import store from "../context/store";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            headerRight: () => {
              return (
                <Pressable>
                  <MaterialIcons
                    name="account-circle"
                    size={40}
                    color="black"
                  />
                </Pressable>
              );
            },
          }}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="ShoppingCart"
          options={{ headerTitle: "Cart", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="MenuModal"
          options={{
            headerTitle: "Menu",
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
          }}
        />
      </Stack>
    </Provider>
  );
}
