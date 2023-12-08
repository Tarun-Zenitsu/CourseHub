import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Appbar = () => {
  const [username, setUsername]= useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/admin/me", { headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem("token")}
  }).then((res) => setUsername(res.data.username));
  setTimeout(() => {
    axios.get("http://localhost:3000/admin/me", { headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem("token")}
  }).then((res) => setUsername(res.data.username));
  }, 10000);
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/Login";
  }
  
  if(username){
    return (
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          <a href="/" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem', fontWeight: 'bold', transition: 'background-color 0.3s ease-in-out' }}>Corsera</a>
          <div style={{display: "flex", gap: "5px"}}>
              <a href="/Login" style={{
              textDecoration: 'none',
              padding: '8px 5px',
              color: 'black',
            }}>{username}</a>
            <button onClick={handleLogout} style={{
            textDecoration: 'none',
            padding: '8px 16px',
            backgroundColor: '#2196f3',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
            border: 'none',
          }}>Logout</button>
          </div>
      </nav>
    )
  }
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <a href="/" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem', fontWeight: 'bold', transition: 'background-color 0.3s ease-in-out' }}>Corsera</a>
        <div style={{display: "flex", gap: "5px"}}>
            <a href="/SignUP" style={{
            textDecoration: 'none',
            padding: '8px 16px',
            backgroundColor: '#2196f3',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>Signup</a>
            <a href="/Login" style={{
            textDecoration: 'none',
            padding: '8px 16px',
            backgroundColor: '#2196f3',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>Login</a>
        </div>
    </nav>
  )
}

export default Appbar