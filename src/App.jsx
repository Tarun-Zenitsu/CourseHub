import AddCourse from './AddCourse';
import Appbar from './Appbar'
import { Courses } from './Courses';
import Login from './Login';
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/AddCourse" element={<AddCourse />}/>
        <Route path="/Courses" element={<Courses />}/>
        {/* <Route path="/me" element={<Appbar />}/> */}
        <Route path="/" element={<Signup />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
