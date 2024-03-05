import React, { useState } from 'react';
import {Link} from 'react-router-dom'

// CSS
import "./assets/css/homenav.css";

// ICONS
import userIcon from './assets/icons/user.png';
import ShoppingBagIcon from './assets/icons/shopping.png';

function HomeNav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const isAuthenticated = sessionStorage.getItem("userData");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Delete session storage
    sessionStorage.removeItem("userData");
  };

  return (
    <>
      <div className="Navbar">
        <div className='HomeUserIconDiv' onClick={toggleDropdown}>
          <img className='HomeUserIcon' src={userIcon} alt="userIcon" />
          
          {showDropdown && (
            <div className="dropdown-content">
              {isAuthenticated ? (
                <>
                  <Link className='DropdownLink' to="/" onClick={handleLogout}>Logout</Link>
                </>
              ) : (
                <>
                  <Link className='DropdownLink' to="/login">Login</Link> {/* Use Link */}
                  <Link className='DropdownLink' to="/SignupForm">Signup</Link> {/* Use Link */}
                </>
              )}
            </div>
          )}

        </div>
        <div className='HomeShoppingBagIconDiv'>
          <Link to="/shoppingcart">
          <img className='HomeShopIcon' src={ShoppingBagIcon} alt="shoppingBagIcon" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeNav;
