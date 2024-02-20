import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import Signup from "./components/SignPage/Signup";
import { Login } from "./components/LoginPage/Login";
import { Final } from "./components/Products/Final";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SignupForm from "./components/SignPage/SignupForm";

export const App = () => {
  console.log(window.innerWidth);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home title="Home" /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/cart" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/products" element={ <Final /> } />
        <Route path="/profile" element={ <ProfilePage /> } />
        <Route path="/SignUpForm" element={<SignupForm/>} />{" "}
      </Routes>
    </Router>
  );
};
