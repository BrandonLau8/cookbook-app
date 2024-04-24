import React, { useEffect } from "react";
import useAuthService from "../services/auth.service";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";

const LoginPage = () => {
  const { username, setUsername, password, setPassword, onLogin } =
    useAuthService();

  //   useEffect(() => {
  //     getLogin();
  //   }, []);
  const { status, setStatus } = useAuthContext();


  const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    onLogin(e, username, password);
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"500px"}
        marginLeft={"auto"}
        marginRight={"auto"}
        component={"form"}
        onSubmit={onSubmitLogin}
      >
        <div>Login</div>
        <TextField
          id="outlined-basic"
          label="User"
          variant="outlined"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </>
  );
};

export default LoginPage;
