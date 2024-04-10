import React from 'react'
import useAuthService from '../services/auth.service';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const RegisterPage = () => {
    const { username, setUsername, password, setPassword, onRegister } =
    useAuthService();

const onSubmitLogin = (e:React.FormEvent<HTMLFormElement>) => {
 onRegister(e, username, password);   
}

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
          Register
        </Button>
      </Box>
    </>
  )
}

export default RegisterPage