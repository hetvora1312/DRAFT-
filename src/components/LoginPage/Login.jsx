import React from "react";
import "./Login.css";
import {
  Link,
} from "react-router-dom";
import mail from "./images/icons8-email-96.png";
import google from "./images/icons8-google-64.png";
import i from "./images/icons8-i-64.png";
import ln from "./images/icons8-linkedin-50.png";
export const Login = () => {
  return (
    <>
      <div className="middle">
        <div className="logcard">
          <h2>Login to DevRev</h2>
          <div className="h31">
            Welcome to DevRev, our mission is to help the world's most customer
            centric companies build and support great products.
          </div>
          <div className="linkops">
            <Link to="/" className="Link">
              <button className="buttons">
                <img className="icons" src={mail} alt="" />
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
            <img src={i} style={{ width: "18.72px", height: "18.72px" }} alt="img" />
            <h3 style={{ fontWeight: "400", margin: "0px" }}>
              We recommend using your work email.
            </h3>
          </div>
          <br />
          <br />
          <span>
            {" "}
            Don't have an account yet?{" "}
            <Link className="links" to="/signup">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
