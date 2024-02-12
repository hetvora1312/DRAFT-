import React, { useState } from "react";
import "./Card.css";
import next from "./icons8-next-page-100.png";
import mail from "./icons8-email-64.png";
import white from "./white.png";

export const Card = () => {
  const [firstNameFocused, setFirstNameFocused] = useState(false);

  const handleFirstNameFocus = () => {
    setFirstNameFocused(true);
  };

  const handleFirstNameBlur = () => {
    setFirstNameFocused(false);
  };

  return (
    <>
      <div className="main">
        <div className="signUpCard">
          <div>
            <img src={white} alt="" className="glassEffect" />
          </div>
          <div className="content">
            <div className="Formheading">SignUp To DevRev</div>

            <div className="textFieldDiv">
              <input
                type="text"
                className="textBox"
                id="text1"
                onFocus={handleFirstNameFocus}
                onBlur={handleFirstNameBlur}
              />
              <label
                htmlFor="text1"
                className={firstNameFocused ? "labelFocused" : "label"}
              >
                First Name
              </label>
            </div>
            {/* Other input fields */}
          </div>
        </div>
      </div>
    </>
  );
};

