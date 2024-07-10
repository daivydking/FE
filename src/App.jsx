import React from 'react';
import Login from './components/LoginPage/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/SignupPage/Signup';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  </Router>
  )
}

export default App