import React from 'react'
import './assets/css/profilePageSide.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut , faEnvelope , faMessage , faGem} from '@fortawesome/free-solid-svg-icons';

function ProfilePageSidebar() {
  return (
    <>
      <aside className='profilePageSidebar'>
          <div className='profilePageSideHeading'>
              <h2>Rubi <FontAwesomeIcon icon={faGem} /></h2>
          </div>

          <div className='profilePageSideListDiv'>
            <ul type='none' className='profilePageSideList'>
              <li><a href="#">Homepage</a></li>
              <li><a href="##">Saves & Favourites <span><ArrowForwardIosIcon/></span></a></li>
              <li><a href="###">Account Settings <span><ArrowForwardIosIcon/></span></a></li>
            </ul>
          </div>

          <hr className='sidebar' />

        <div className="profilePageSideContact">
            <p className='profilePageSideContactHeading'>CONTACT AN EXPERT</p>
            <div className='profilePageSideContactDiv'>
                <div className='profilePageContactIconDiv'>
                <FontAwesomeIcon icon={faUserAstronaut} />
                </div>
                <div className='profilePageContactInfoDiv'>
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

export default ProfilePageSidebar;
