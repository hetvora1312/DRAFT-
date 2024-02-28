import React from "react";
import "../LoginPage/Login.css";
import { Link } from "react-router-dom";
import mail from "./images/icons8-email-96.png";
import google from "./images/icons8-google-64.png";
import i from "./images/icons8-i-64.png";
import ln from "./images/icons8-linkedin-50.png";


export default function Signup() {
  return (
      <div>
        <div className="middle">
          <div className="logcard">
            <h2>Signup to DevRev</h2>
            <div className="h31">
              Welcome to DevRev, our mission is to help the world's most
              customer centric companies build and support great products.
            </div>
            <div className="linkops">
              <Link to="/signupForm" className="Link">
                <button className="buttons">
                  <img className="icons" src={mail} alt="icon" />
                  <div style={{ margin: "auto", width: "100%" }}>
                    Continue With Email
                  </div>
                </button>
              </Link>
              <Link to="/" className="Link">
                <button className="buttons">
                  <img className="icons" src={google} alt="" />
                  <div style={{ margin: "auto", width: "100%" }}>
                    Continue With Google
                  </div>
                </button>
              </Link>
              <Link to="/" className="Link">
                <button className="buttons">
                  <img className="icons" src={ln} alt="" />
                  <div style={{ margin: "auto", width: "100%" }}>
                    Continue With Linkedin
                  </div>
                </button>
              </Link>
              <span></span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "3px" }}>
              <img src={i} alt="icon" style={{ width: "18.72px", height: "18.72px" }} />
              <h3 style={{ fontWeight: "400", margin: "0px" }}>
                We recommend using your work email.
              </h3>
            </div>
            <br />
            <br />
            <h3 style={{ fontWeight: "400" }}>
              By continuing, you acknowledge that you have read and understood,
              and agree to DevRev's Terms & Conditions and Privacy Policy.
            </h3>
            <span>
              {" "}
              Already have an account?{" "}
              <Link className="links" to="/login">
                Log In
              </Link>
            </span>
          </div>
        </div>
      </div>

  );
}
