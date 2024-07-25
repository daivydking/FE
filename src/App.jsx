import React from 'react';
import Login from './components/LoginPage/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/SignupPage/Signup';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LandingPage from './components/LandingPage/LandingPage';
import OTP from './components/OTPPage/OTP';
import Profile from './components/PatientProfilePage/Profile';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path='/OTP' element={<OTP />} />
      <Route path='/Profile' element={<Profile />} />
    </Routes>
  </Router>
  )
}

export default App