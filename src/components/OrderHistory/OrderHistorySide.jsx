import React from 'react'
import './assets/css/OrderHistorySide.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut , faEnvelope , faMessage , faGem} from '@fortawesome/free-solid-svg-icons';

function OrderHistorySide() {
  return (
    <>
      <aside className='orderHistorySidebar'>
          <div className='orderHistorySideHeading'>
              <h2>Rubi <FontAwesomeIcon icon={faGem} /></h2>
          </div>

          <div className='orderHistorySideListDiv'>
            <ul type='none' className='orderHistorySideList'>
              <li><a href="/">Homepage</a></li>
              <li><a href="/">Saves & Favourites <span><ArrowForwardIosIcon/></span></a></li>
              <li><a href="/">Account Settings <span><ArrowForwardIosIcon/></span></a></li>
            </ul>
          </div>

          <hr className='sidebar' />

        <div className="orderHistorySideContact">
            <p className='orderHistorySideContactHeading'>CONTACT AN EXPERT</p>
            <div className='orderHistorySideContactDiv'>
                <div className='orderHistoryContactIconDiv'>
                <FontAwesomeIcon icon={faUserAstronaut} />
                </div>
                <div className='orderHistoryContactInfoDiv'>
                  <p>(P)(800)-800-1234</p>
                  <p>(F)(432)-200-2934</p>
                  <p>Mon-Fri 7am-7pm CT</p>
                  <p><a href="####"><FontAwesomeIcon icon={faMessage} /> &nbsp; <span>Start a Chat</span></a></p>
                  <p><a href="#####"><FontAwesomeIcon icon={faEnvelope} />  &nbsp; <span>Email Us</span></a></p>
                </div>
            </div>
        </div>

      </aside>
    </>
  )
}

export default OrderHistorySide
