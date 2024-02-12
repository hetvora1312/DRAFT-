import React from "react";
import {FloatingLabel , Form} from 'react-bootstrap';

import "./Card.css";
import next from "./icons8-next-page-100.png";
import mail from "./icons8-email-64.png";
import white from "./white.png";

function Card(){
 
  return (
    <>
     {/* <div className="main">
      <div className="signUpCard">
        <div>
          <img src={white} alt="" className="glassEffect" />
        </div>
        <div className="content">
          <div className="Formheading">SignUp To DevRev</div> */}

          <FloatingLabel controlId="text1" label="First Name" className="textFieldDiv">
            <Form.Control type="text" className="textBox" placeholder="" />
          </FloatingLabel>

          <FloatingLabel controlId="text2" label="Last Name" className="textFieldDiv">
            <Form.Control type="text" className="textBox" placeholder="" />
          </FloatingLabel>

          <FloatingLabel controlId="text3" label="Email" className="textFieldDiv">
            <Form.Control type="email" className="textBox" placeholder="" />
          </FloatingLabel>

          <FloatingLabel controlId="text4" label="Contact No." className="textFieldDiv">
            <Form.Control type="text" className="textBox" placeholder="" />
          </FloatingLabel>

          <FloatingLabel controlId="text5" label="Company" className="textFieldDiv">
            <Form.Control type="text" className="textBox" placeholder="" />
          </FloatingLabel>

          <FloatingLabel controlId="text6" label="Address" className="textFieldDiv">
            <Form.Control type="text" className="textBox" placeholder="" />
          </FloatingLabel>

          <FloatingLabel controlId="text7" label="Password" className="textFieldDiv">
            <Form.Control type="password" className="textBox" placeholder="" />
          </FloatingLabel>

          <FloatingLabel controlId="text8" label="Conform Password" className="textFieldDiv">
            <Form.Control type="password" className="textBox" placeholder="" />
          </FloatingLabel>

        {/* </div>
      </div>
    </div> */}
    </>

    // Fields :
  );
};

export default Card;