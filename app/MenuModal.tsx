import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const MenuModal = (props: Props) => {
  return (
    <View>
      <Text style={styles.text}>Nike</Text>
      <Text style={styles.text}>Adidas</Text>
      <Text style={styles.text}>Sketchers</Text>
      <Text style={styles.text}>New Balance</Text>
      <Text style={styles.text}>About Us</Text>
      <Text style={styles.text}>Enquiry</Text>
    </View>
  );
};

export default MenuModal;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    padding: 10,
    fontSize: 20,
  },
});
