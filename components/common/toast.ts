import { DeviceEventEmitter } from "react-native";

type TOAST = {
  message?: string;
  icon: string;
};

const toast = {
  info: (options: TOAST) => {
    DeviceEventEmitter.emit("SHOW_TOAST", { ...options, type: "info" });
  },
  success: (options: TOAST) => {
    DeviceEventEmitter.emit("SHOW_TOAST", { ...options, type: "success" });
  },
  error: (options: TOAST) => {
    DeviceEventEmitter.emit("SHOW_TOAST", { ...options, type: "error" });
  },
};

export default toast;
