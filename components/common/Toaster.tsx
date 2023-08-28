import { View, Text, DeviceEventEmitter, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

type Props = {};

const Toaster = (props: Props) => {
  const [message, setMessage] = useState<string>("");

  const onNewToast = (data: string) => {
    setMessage(data.message);
  };

  useEffect(() => {
    DeviceEventEmitter.addListener("SHOW_TOAST", onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  if (!message) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "1%",
    backgroundColor: "limegreen",
    borderRadius: 50,
    width: "70%",
    zIndex: 1,
    elevation: 1,
    padding: 10,
    alignSelf: "center",
  },
  message: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Toaster;
