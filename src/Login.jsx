import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [loggedIn, setLoggedIn] = useState(false)

  const handelLogin = () => {
    const formdata = {username, password}
    console.log(formdata);
    axios.post("http://localhost:3000/admin/login", formdata, {headers: {'Content-Type': 'application/json'}}).
    then((res) => console.log(res.data), setLoggedIn(true)).
    catch((err) => console.log(err));
    setUsername("");
    setPassword("");
  }
  if(loggedIn){
    return <Navigate to="/AddCourse" />
  }


  return (
    <>
        <h1 style={{display: "flex", alignItems: 'center', justifyContent: "center", paddingTop: "100px"}}>welcome to corsera, Login</h1>
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={"10px"}
        // minHeight="100vh" // Set a minimum height to ensure the centering is visible
        >
        <Card variant="outlined" style={{ width: "400px", padding: "20px" }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', flexDirection: 'column' }}>
            <TextField id="outlined-basic" label="username" variant="outlined" type="text" onChange={(e) => setUsername(e.target.value)}/>
            <TextField id="outlined-password-input" label="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <Button variant="contained" onClick={handelLogin}>SignUp</Button>
            </div>
        </Card>
        </Box>
    </>
  );
};

export default Login;

