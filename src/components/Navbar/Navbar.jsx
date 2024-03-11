import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="MainNavDiv">
      
        <Link to="/" className="logo">
          ActiveLink.
        </Link>
        <nav>
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/productdetail">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/">Contact</Link>
        </nav>
      
    </div>
  );
};


