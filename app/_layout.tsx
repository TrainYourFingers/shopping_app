import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="ProductDetailScreen"
        options={{ presentation: "modal" }}
      />
      <Stack.Screen name="ShoppingCart" options={{ headerShown: false }} />
    </Stack>
  );
}
