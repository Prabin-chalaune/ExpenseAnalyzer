import React,{useState}from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import App from './App';
import Homepage from './Components/home/Homepage';
import Forgotpass from './Components/Auth/Forgotpass';
import ResetPassword from './Components/Auth/ResetPassword';
const Appmain = () => {

  const [user, setLoginUser]=useState({});

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/dashboard" element={<App />} />
        <Route exact path="/forgotpass" element={<Forgotpass/>} />
        <Route exact path="/forgotpass/resetpass/:id/:token" element={<ResetPassword/>} />
      </Routes>
    </Router>
  );
};

export default Appmain;

