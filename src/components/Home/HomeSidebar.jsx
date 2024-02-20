import React from 'react';

import './assets/css/homesidebar.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// ICONS
import homeicon from './assets/icons/homeicon.png';
import producticon from './assets/icons/producticon.png';
import orderHicon from './assets/icons/orderhistoryicon.png';
import invoiceicon from './assets/icons/invoiceicon.png';
import closeicon from './assets/icons/closeicon.png';


function Sidebar() {
  return (
    <>
        
      
            <div className="Sidebar">
              <div className="SidebarClose">
              <button className='Sidebarclose'><img src={closeicon} alt="icon" /></button>
              </div>
              <ul className='homeSidebarUl' type="none">
                <li><img src={homeicon} alt="icon" /><a href="/home">Home</a></li>
                <li><img src={producticon} alt="icon" /><a href="/product">Products</a></li>
                <li><img src={orderHicon} alt="icon" /><a href="/orderH"> Order History</a></li>
                <li><img src={invoiceicon} alt="icon" /> <a href="/invoice">Invoice</a></li>
              </ul>
            </div>
          
        
    </>
  );
}

export default Sidebar;
