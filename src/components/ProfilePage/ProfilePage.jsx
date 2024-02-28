import React from "react";
import './assets/css/ProfilePage.css';

import ProfilePageSidebar from "./ProfilePageSidebar";
import ProfilePageMain from "./ProfilePageMain";


function ProfilePage() {
  return (
    <>
      <div className="profilePage containerDiv">
        <div className="profilePageMain">
           <ProfilePageSidebar/>
           <ProfilePageMain/> 
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
