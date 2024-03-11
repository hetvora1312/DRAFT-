import React from "react";
import "./Footer.css";

// icons
import footer1 from "./assets/icons/footer1.png";
import footer2 from "./assets/icons/footer2.png";
import footer3 from "./assets/icons/footer3.png";

export const Footer = () => {
  return (
    <div className="HomeFooterDiv">
      <div className="HomeFooterComponentDiv">
      <div className="HomeFooterQuestionHeading">
        <p>
          Any Questions?
          <br />
          We're here for you.{" "}
        </p>
      </div>

      <div className="HomeFooterComponent1">
        <img src={footer1} alt="icon" />
        <p>For help with upgrades, <br />purchasing, billing, and anything account specific,</p>
        <a href="/contact" className="Contact">Contact Support</a>
      </div>

      <div className="HomeFooterComponent2">
        <img src={footer2} alt="icon" />
        <p>Get more direct help from your<br />account contact <br /> Stacy Raven</p>
        <a href="/email" className="Email">sraven@company.com</a>

      </div>

      <div className="HomeFooterComponent3">

        <div className="grey-line"></div>

        <div className="HomeFooterComponent3Sub">
        <img src={footer3} alt="icon" />
        <p>Let us know how we’re doing.</p>
        <button className="FeedbackButton">Give Feedback</button>
        </div>
        </div>

      </div>

      <div className="HomeComponentFooterHelp">
        For other questions, please visit Company Help.
        </div>

      <div className="HomeComponentCopyrightDiv"> 
        <p>Copyright © 2000-2024 Bluestone Technologies. All rights reserved. | Quantum Solutions Inc. | 1234 Hollywood Boulevard, Los Angeles, CA, USA</p>

        <div className="TermsAndPrivacy">
          <a href="/terms">Terms of service</a>
          <a href="/privacy">Privacy Statement</a>
        </div>

      </div>  
    </div>
  );
}

