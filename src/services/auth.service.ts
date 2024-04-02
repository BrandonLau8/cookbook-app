import axios, { Axios, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

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


  const postLogin = async (): Promise<void> => {
    try {
        const response: AxiosResponse<AuthResponse> = await axios.post<AuthResponse>(
            REST_API_BASE_URL + "/login",
            {
                username: username,
                password: password,
            }
        );
        console.log("Login successful:", response.data);
        // You can perform further actions here after successful login
    } catch (error) {
        console.error("Login failed:", error);
        // Handle login failure if needed
    }
};

  //   const getLogin = async () => {
  //     try {
  //       const response: AxiosResponse<T> = await axios.get<T>(
  //         REST_API_BASE_URL + "/login"
  //       );
  //       // Handle response as needed
  //       console.log(response);
  //       return response.data;
  //     } catch (error) {
  //       console.error("Login failed", error);
  //       // Handle error appropriately
  //       throw error; // Rethrow error to be handled by caller
  //     }
  //   };

  return {
    username,
    setUsername,
    password,
    setPassword,
    postLogin,
  };
};

export default useAuthService;
