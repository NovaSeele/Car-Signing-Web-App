import { Home } from "./Home";
import "./App.css";
//form folder import
import { LoginPage } from "./components/form/LoginPage";
import { ForgotPassword } from "./components/form/ForgotPassword";
import { SignUp } from "./components/form/SignUp";

import { NavBar } from "./components/navBar/NavBar";

import { UserInfo } from "./components/information/UserInfo";
import { CarInfo } from "./components/information/CarInfo";
import { RegistrationCenter } from "./components/information/RegistrationCenter";


{/* Import thing in the form input file */}
import { RegForm } from "./components/form input/RegForm";
import { FormMain } from "./components/form input/FormMain";
import { OwnerForm } from "./components/form input/OwnerForm";
import { CompanyForm } from "./components/form input/CompanyForm";
import { CarForm } from "./components/form input/CarForm";

import { InfoTable } from "./components/Static/InfoTable";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infotable" element={<InfoTable />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/navBar" element={<NavBar />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/carinfo" element={<CarInfo />} />
          <Route path="/registrationcenter" element={<RegistrationCenter />} />
          <Route path="/form" element={<RegForm />} />
          <Route path="/formmain" element={<FormMain />} />
          <Route path="/ownerform" element={<OwnerForm />} />
          <Route path="/companyform" element={<CompanyForm />} />
          <Route path="/carform" element={<CarForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
