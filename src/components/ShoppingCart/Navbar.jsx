import React, { useState } from 'react';
import {Link} from 'react-router-dom'

// CSS
import "./assets/css/navbar.css";

// ICONS
import userIcon from './assets/icons/user.png';
import ShoppingBagIcon from './assets/icons/shopping.png';

function HomeNav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="Navbar">
        <div className='HomeUserIconDiv' onClick={toggleDropdown}>
          <img className='HomeUserIcon' src={userIcon} alt="userIcon" />
          {showDropdown && (
            <div className="dropdown-content">
              <Link className='DropdownLink' to="/login">Login</Link> {/* Use Link */}
              <Link className='DropdownLink' to="/SignupForm">Signup</Link> {/* Use Link */}
            </div>
          )}
        </div>
        <div className='HomeShoppingBagIconDiv'>
          <Link to="/shoppingcart">
          <img src={ShoppingBagIcon} alt="shoppingBagIcon" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeNav;
