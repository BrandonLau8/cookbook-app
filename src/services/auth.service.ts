import axios, { Axios, AxiosResponse } from "axios";
import { request } from "../utils/axios_helper";
import { ReactEventHandler, useEffect, useState } from "react";

interface UserItem {
  username: string;
  password: string;
}

interface AuthResponse {
  data: {
    content: UserItem;
  }; //represents the identity of the authenticated person
}

const useAuthService = () => {
  const REST_API_BASE_URL = "http://localhost:8080/auth";
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onLogin = (
    e: React.FormEvent<HTMLFormElement>,
    username: string,
    password: string
  ) => {
    e.preventDefault();
    request("POST", "/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response.data);
        // const authorities = response.data.authorities;
        // if (authorities && authorities.length > 0) {
        //   const role = authorities[0].authority;
        //   if (role === "ROLE_ADMIN" && role === "ROLE_USER") {
        //     window.location.href = "/admin";
        //   }
        //   if (role === "ROLE_USER") {
        //     window.location.href = "/user";
        //   }
        // }
        // console.log(response.data.authorities[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onRegister = (
    e: React.FormEvent<HTMLFormElement>,
    username: string,
    password: string
  ) => {
    e.preventDefault();
    request("POST", "/register", {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
    })
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    onLogin,
    onRegister,
  };
};

export default useAuthService;
