import React from 'react'

// CSS
import "./assets/css/homenav.css"

// ICONS
import userIcon from './assets/icons/user.png';
import ShoppingBagIcon from './assets/icons/shopping.png'

function HomeNav() {
  return (
    <>
        <div className="Navbar">
        <div className='HomeUserIconDiv'>
        {/* <FontAwesomeIcon icon={faUserCircle} /> */}
        <img className='HomeUserIcon' src={userIcon} alt="userIcon" />
            
        </div>
        <div className='HomeShoppingBagIconDiv'>
        {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
        <img src={ShoppingBagIcon} alt="shoppingBagIcon" />

        </div>

    </div>
    </>
  )
}

export default HomeNav