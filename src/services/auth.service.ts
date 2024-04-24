import axios, { Axios, AxiosResponse } from "axios";
import { request } from "../utils/axios_helper";
import { ReactEventHandler, useContext, useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

interface UserItem {
  firstname: string;
  lastname: string;
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
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { status, setStatus } = useAuthContext();
  const navigate = useNavigate();

  const onLogin = (
    e: React.FormEvent<HTMLFormElement>,
    username: string,
    password: string
  ) => {
    e.preventDefault();
    request("POST", "/auth/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response.data.status);
        setStatus(response.data.status);
  
      })

      .catch((error) => {
        console.error(error);
      });

  };

  const onLogout = () => {
    request("GET", "/logout", {}).then((response) => {
      console.log(response);
    });
  };

  const onRegister = (
    e: React.FormEvent<HTMLFormElement>,
    firstname: string,
    lastname: string,
    username: string,
    password: string
  ) => {
    e.preventDefault();
    request("POST", "/auth/register", {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
    }).then((response) => {
      console.log(response.data);
    });
  };

  return {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    username,
    setUsername,
    password,
    setPassword,
    onLogin,
    onRegister,
  };
};

export default useAuthService;
