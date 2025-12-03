import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/signup"
import Dashboard from "./pages/Dashboard"
import React from "react"
import { Link } from "react-router-dom"



const App:React.FC=() =>{
  

  return (
    <>
      <Router>
        {/* <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/dashboard">DashBoard</Link>
        </nav> */}


        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App


