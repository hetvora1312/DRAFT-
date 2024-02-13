import {React,useEffect} from "react";
import {FloatingLabel , Form} from 'react-bootstrap';

import "./css/SignupForm.css";
import next from "./images/icons8-next-page-100.png";
import mail from "./images/icons8-email-64.png";
import white from "./images/white.png";

function SignupForm(){
    useEffect(() => {
        // Add a class to the body tag
        document.body.classList.add('signupFormBody');
    
        // Cleanup: remove the class when the component unmounts
        return () => {
          document.body.classList.remove('signupFormBody');
        };
      }, []);
 
  return (
    <>
        <div className="SignupFormMain">
          <div className="Formheading">SignUp To DevRev</div>

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

          </div>

    </>

  );
};

export default SignupForm;