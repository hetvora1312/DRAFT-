import React from "react";
import "./assets/css/Signup.css";

// Component
import { SignupForm } from "./SignupForm";
import SignupPicture from "./assets/images/Login-Illustration.png";

export const Signup = () => {
  return (
    <div className="containerDiv">
      <div className="SignUpDiv">
      <SignupForm />

      <div className="SignupPicture">
        <img src={SignupPicture} alt="SignupImg" />
      </div>
      </div>
    </div>
  );
};
