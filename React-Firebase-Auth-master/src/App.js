import './App.css';
import React from 'react';
import Header from './MyComponent/Header';
import HomePage1 from './MyComponent/Homepage1';
import Appointment1 from './Appointment1';
// import About from './MyComponent/About';
import Login from './components/Login';
import Signup from './components/Signup';
// import { Auth } from "./Auth";
// import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
// import Dashboard from "./components/Dashboard"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About1 from './MyComponent/About1';
// import Login1 from './MyComponent/Login1';
// import {container} from "react-bootstrap"

function App() {
  return (
 <>
   
<Router>
  <Header />
   <Routes>

    <Route path="/About1" element={<About1 />}/> 

          <Route path="/Appointment1" element={<Appointment1 />}/>

          {/* <Route path="/Login" element={<Login />}/> */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/update-profile" element={<UpdateProfile />} />

          <Route path="/" element={<HomePage1 />}/>
        </Routes>
  </Router>
  </>
  );
}

export default App;