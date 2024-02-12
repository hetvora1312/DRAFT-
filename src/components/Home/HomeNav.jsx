import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import "./assets/css/homenav.css"
import { Link } from 'react-router-dom';

function HomeNav() {
  return (
    <>
        <div className="Navbar">
        <div>
           <Link to="/cart"> <FontAwesomeIcon icon={faShoppingCart} /> </Link>
        </div>
        <div>
        <Link to="/signup"> <FontAwesomeIcon icon={faUserCircle} /> </Link>
        </div>

    </div>
    </>
  )
}

export default HomeNav