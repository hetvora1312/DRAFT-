import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { Home } from "./components/Home/Home";
import Signup from "./components/SignPage/Signup";
import { Login } from "./components/LoginPage/Login";
import { Final } from "./components/Products/Final";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SignupForm from "./components/SignPage/SignupForm";

export const App = () => {
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
