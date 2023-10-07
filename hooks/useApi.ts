import React from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

interface PROPS {
  url: string;
  body: {
    username: string;
    password: string;
  };
}

function ApiService() {
  const useLogin = async ({ url, body }: PROPS) => {
    console.log(url, body);
    try {
      console.log("running from hook");
      const result = await instance({
        method: "POST",
        url: url,
        data: {
          username: body.username,
          password: body.password,
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    useLogin,
  };
}

export default ApiService;
