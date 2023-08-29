import { View, Text, DeviceEventEmitter, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react-native";

const Toaster = () => {
  const [icon, setIcon] = useState<string>("");
  const animationRef = useRef<Lottie>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onNewToast = (data: any) => {
    switch (data.icon) {
      case "check":
        setIcon(require("../../assets/animation/check.json"));
        break;
      case "error":
        setIcon(require("../../assets/animation/check.json"));
        break;
      default:
        return null;
    }
    setIsVisible(true);
    animationRef?.current?.play();
  };

  useEffect(() => {
    DeviceEventEmitter.addListener("SHOW_TOAST", onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      {isVisible && (
        <Lottie
          ref={animationRef}
          source={icon}
          autoPlay={true}
          loop={false}
          style={{
            width: 75,
            height: 75,
          }}
          onAnimationFinish={() => {
            setTimeout(() => {
              setIsVisible(false);
            }, 1000);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "1%",
    width: "100%",
    padding: 10,
    zIndex: 1,
    elevation: 1,
    display: "flex",
    alignItems: "center",
  },
});

export default Toaster;
