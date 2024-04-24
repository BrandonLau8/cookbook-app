import React from "react";
import useAuthService from "../services/auth.service";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const RegisterPage = () => {
  const {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    username,
    setUsername,
    password,
    setPassword,
    onRegister,
  } = useAuthService();

  const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    onRegister(e, firstname, lastname, username, password);
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
        <div>Register</div>

        {/* Firstname */}
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />

        {/* Lastname */}
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        {/* Username */}
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password */}
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </>
  );
};

export default RegisterPage;
