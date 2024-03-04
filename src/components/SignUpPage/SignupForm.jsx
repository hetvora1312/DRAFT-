import React, { useState } from "react";
import { Button } from "@mui/material";

//  css
import './assets/css/SignupForm.css'

// Component
import SignupStepOne from './SignupStepOne';
import SignupStepTwo from "./SignupStepTwo";

const steps = ["Step 1", "Step 2"]; // Define your steps here

export const SignupForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
      username: "",
      fname: "",
      lname:"",
      email: "",
      phone:"",
      company:"",
      password:"",
      cpassword:"",
      userType:"",
      agreedTerms: false // Add a new state for the checkbox
  });

  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
      console.log("Form Data:", formData);
      // You can perform further actions here, such as submitting the form data
  };

  const getStepContent = (step) => {
      switch (step) {
          case 0:
              return <SignupStepOne formData={formData} setFormData={setFormData} />;
          case 1:
              return <SignupStepTwo formData={formData} setFormData={setFormData} />;
          default:
              return "Unknown Step";
      }
  };

  return (
      <div className="SignupFormDiv">
          <div className="SignupFormHeading">
              <p>Sign Up</p>
          </div>
          <div className="form_content">
              {getStepContent(activeStep)}
          </div>
          <div className="SignupButtonDiv">
              <Button className="SignupBackButton" disabled={activeStep === 0} onClick={handleBack}>
                  Back
              </Button>
              <Button
                  className="SignupNextButton"
                  variant="contained"
                  color="primary"
                  onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                  disabled={!formData.agreedTerms} // Disable the button if agreedTerms is false
              >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
          </div>
          {activeStep === 0 &&
              <div className="SignupLoginLinkDiv">
                  <p>Already have an account?&emsp;<a className="SignupLoginLink" href="/login">Log in</a></p>
              </div>
          }
      </div>
  );
};