import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faHeadphones , faEnvelope , faTimes } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';



import './assets/css/homesidebar.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  return (
    <>
        
      
            <div className="Sidebar">
              <div className="SidebarClose">
              <FontAwesomeIcon icon={faTimes}/>
              </div>
              <ul className='homeSidebarUl' type="none">
                <li><a href="#"><FontAwesomeIcon icon={faHome} /> Home</a></li>
                <li><a href="#1"><FontAwesomeIcon icon={faYoutube} /> Products</a></li>
                <li><a href="#2"><FontAwesomeIcon icon={faHeadphones}/> Order History</a></li>
                <li><a href="#3"><FontAwesomeIcon icon={faEnvelope}/> Invoice</a></li>
              </ul>
            </div>
          
        
    </>
  );
}

export default Sidebar;
