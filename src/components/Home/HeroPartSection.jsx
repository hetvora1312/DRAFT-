import React from "react";
import "./assets/css/homeComponents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function HeroPartSection() {
  return (
    <div className="PartMainDiv container">

      <div className="PartDiv">

        <div className="Part1">
        <div className="CallIconDiv">
        <FontAwesomeIcon className="CallIcon" icon={faPhone} />
        </div>
        <div className="Question">
          <h3 className="PartsHeading">Questions?</h3>
          <div className="PartsText">
            <p>We're here for you.</p>
          </div>
        </div>
        </div>
        
        
        <div className="Part2">
        <div className="CallIconDiv">
        <FontAwesomeIcon className="CallIcon" icon={faPhone} />
        </div>
        
        <div className="Support">
          <h3 className="PartsHeading">Support</h3>
          <div className="PartsText">
            <p>
              For help with purchase,return,billing and anything account
              specific,contact support.
            </p>
          </div>
        </div>
        </div>
       
        <div className="Part3">
        <div className="CallIconDiv">
        <FontAwesomeIcon className="CallIcon" icon={faPhone} />
        </div>
        
        <div className="Account">
          <h3 className="PartsHeading">Your Account</h3>
          <div className="PartsText">
            <p>Get more direct help from your account contact:</p>
            <p>Elon Tusk</p>
            <p>eTusk@earth.com / (888)-800-0000</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPartSection;
