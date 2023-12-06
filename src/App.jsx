import Appbar from './Appbar'
import Login from './Login';
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/" element={<Signup />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
