import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import "./assets/css/homenav.css"

function HomeNav() {
  return (
    <>
        <div className="Navbar">
        <div>
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div>
            <FontAwesomeIcon icon={faUserCircle} />
        </div>

    </div>
    </>
  )
}

export default HomeNav