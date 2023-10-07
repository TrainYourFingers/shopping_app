import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

type Props = {};

const MenuModal = (props: Props) => {
  const handleRouting = (route: string) => {
    //@ts-ignore
    router.push(route);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Nike</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Adidas</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Sketchers</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>New Balance</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{ backgroundColor: "black", borderRadius: 10 }}
          onPress={() => handleRouting("/Login")}
        >
          <Text
            style={{
              color: "white",
              paddingVertical: 10,
              fontWeight: "500",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>About Us</Text>
          <Text style={styles.text}>Enquiry</Text>
        </View>
      </View>
    </View>
  );
};

export default MenuModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignContent: "space-between",
    paddingHorizontal: 40,
  },
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "silver",
  },
  text: {
    textAlign: "center",
    padding: 15,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "silver",
  },
});
