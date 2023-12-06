import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';

const Signup = () => {
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
            <TextField id="outlined-basic" label="User Name" variant="outlined" type="text" />
            <TextField id="outlined-basic" label="email" variant="outlined" type="email" />
            <TextField id="outlined-password-input" label="Password" type="password" />
            <Button variant="contained">SignUp</Button>
            </div>
        </Card>
        </Box>
    </>
  );
};

export default Signup;
