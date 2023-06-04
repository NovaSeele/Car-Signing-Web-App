import { Home } from "./Home";

//form folder import
import { LoginPage } from "./components/form/LoginPage";
import { ForgotPassword } from "./components/form/ForgotPassword";
import { SignUp } from "./components/form/SignUp";
import { CarRegistration } from "./components/form/CarRegistration";

import { NavBar } from "./components/navBar/NavBar";

import { UserInfo } from "./components/information/UserInfo";
import { CarInfo } from "./components/information/CarInfo";
import { RegistrationCenter } from "./components/information/RegistrationCenter";

import { Car } from "./components/information/Car";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<Car />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/navBar" element={<NavBar />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/carinfo" element={<CarInfo />} />
          <Route path="/registrationcenter" element={<RegistrationCenter />} />
          <Route path="/carregistration" element={<CarRegistration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
