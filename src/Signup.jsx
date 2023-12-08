import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [isLogin, setLogin] = useState(false)
    const handelSignUp = async() => {
        const formData = {username, password}
        try {
            const res = await axios.post("http://localhost:3000/admin/signup", formData,{headers: {'Content-Type': 'application/json'}});
            console.log(res.data)
            localStorage.setItem("token", res.data.token);
            setLogin(true);
            // window.location.href = "/Login"; tis is the eugly way to redirect to the page
            setEmail("");
            setPassword("");
            setUsername("");
        } catch (error) {
            console.log(error);
        }
    }
    if(isLogin){
        return(
            <Navigate to={"/Courses"}/>
        )
    }
        
        
  return (
    <>
        <h1 style={{display: "flex", alignItems: 'center', justifyContent: "center", paddingTop: "100px"}}>welcome to corsera, Signup</h1>
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={"10px"}
        // minHeight="100vh" // Set a minimum height to ensure the centering is visible
        >
        <Card variant="outlined" style={{ width: "400px", padding: "20px" }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', flexDirection: 'column' }}>
            <TextField id="outlined-basic" label="User Name" variant="outlined" type="text" 
            onChange={(e) => setUsername(e.target.value)}
            />
            <TextField id="outlined-basic" label="email" variant="outlined" type="email" 
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField id="outlined-password-input" label="Password" type="password" 
            onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handelSignUp}>SignUp</Button>
            </div>
        </Card>
        </Box>
    </>
  );
  
};

export default Signup;
