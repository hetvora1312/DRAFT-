import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import {Signup} from "./components/SignUpPage/Signup";
import { Login } from "./components/LoginPage/Login";
import { Final } from "./components/Products/Final";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';

import { VerifyBuffer } from "./components/ExtraPages/VerifyBuffer";
import { Error404 } from "./components/ExtraPages/Error404"; 

// lazy load
import LazyLoad from 'react-lazy-load';

export const App = () => {
  console.log(window.innerWidth);
  return (
    <LazyLoad>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home title="Home" /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/cart" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/products" element={ <Final /> } />
        <Route path="/profile" element={ <ProfilePage /> } />
        <Route path="/SignupForm" element={<Signup/>} />
        <Route path="/orderHistory" element={ <OrderHistory/> } />
        <Route path="/shoppingcart" element={ <ShoppingCart/> } />
        

        <Route path="/verify" element={ <VerifyBuffer /> } />
        <Route path="*" element={<Error404 />} />


      </Routes>
    </Router>
    </LazyLoad>
  );
};
