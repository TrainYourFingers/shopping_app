import { DeviceEventEmitter } from "react-native";

const toast = {
  info: (options) => {
    DeviceEventEmitter.emit("SHOW_TOAST", { ...options, type: "info" });
  },
  success: (options) => {
    DeviceEventEmitter.emit("SHOW_TOAST", { ...options, type: "success" });
  },
  error: (options) => {
    DeviceEventEmitter.emit("SHOW_TOAST", { ...options, type: "error" });
  },
};

export default toast;
