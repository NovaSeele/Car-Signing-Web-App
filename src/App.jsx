import { Home } from "./Home"
import { LoginPage } from "./components/form/LoginPage"
import { ForgotPassword } from "./components/form/ForgotPassword"
import { SignUp } from "./components/form/SignUp"

import { NavBar } from "./components/navBar/navBar"

import { useState } from "react"

import { User } from "./components/information/User"
import { Car } from "./components/information/Car"

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'


function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<Car />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/navBar" element={<NavBar />} />
        </Routes>

        {/* <Link to="/signup">
          <button>SignUp</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/forgotPassword">Forgot Password</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/navBar">navBar</Link>
            </li>
          </ul>
        </div>
        <div className="how">whyyyy, no way</div> */}
      </Router>
    </div>
  );
}

export default App
