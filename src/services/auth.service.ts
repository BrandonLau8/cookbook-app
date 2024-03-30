import axios, { Axios, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface AuthResponse {
  token: string; //represents the identity of the authenticated person
}

const useAuthService = () => {
  const REST_API_BASE_URL = "http://localhost:8080/auth";
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const postLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response: AxiosResponse<AuthResponse> =
        await axios.post<AuthResponse>(REST_API_BASE_URL + "/login", {
          username,
          password,
        });
      console.log("Login successful");
      const token = response.data.token;
      // Here you can do something with the token, such as storing it in localStorage or a state variable
      // For example, localStorage.setItem("token", token);

      window.location.href = "/"; // Redirect the user after successful login

      console.log(token);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const getLogin = async () => {
    try {
      const response: AxiosResponse<AuthResponse> =
        await axios.get<AuthResponse>(REST_API_BASE_URL + "/login");
      // Handle response as needed
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Login failed", error);
      // Handle error appropriately
      throw error; // Rethrow error to be handled by caller
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    postLogin,
    getLogin,
  };
};

export default useAuthService;
