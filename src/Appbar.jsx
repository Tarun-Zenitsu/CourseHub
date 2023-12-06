import React from 'react'

const Appbar = () => {
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