import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ApiService from "../hooks/useApi";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { useLogin } = ApiService();

  const handleLogin = () => {
    console.log("runnning");
    useLogin({ url: "login", body: { username, password } });
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        paddingTop: 100,
      }}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}
    >
      <Text style={{ fontSize: 32, fontWeight: "700" }}>Login</Text>
      <View
        style={{ width: "100%", paddingHorizontal: 40, paddingVertical: 10 }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            width: "100%",
            padding: 10,
            marginBottom: 10,
            fontSize: 16,
          }}
          placeholder="Username"
          placeholderTextColor={"gray"}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            width: "100%",
            padding: 10,
            fontSize: 16,
          }}
          placeholder="Password"
          placeholderTextColor={"gray"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <TouchableOpacity
          style={{ backgroundColor: "black", borderRadius: 10, width: "50%" }}
          onPress={handleLogin}
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
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({});
