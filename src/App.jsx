import React from 'react';
import Login from './components/LoginPage/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/SignUp/SignUp';
import SignUpOTP from './components/otp/SignUpOTP';
import profile from './components/profile/profile';
import './index.css';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signp" element={<SignUp />} />
      <Route path="/otp" element={<SignUpOTP />} />
      <Route path="/profile" element={<profile />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  </Router>
  )
}

export default App