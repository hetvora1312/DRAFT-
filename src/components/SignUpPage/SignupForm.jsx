import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

//  css
import "./assets/css/SignupForm.css";

// Component
import SignupStepOne from "./SignupStepOne";
import SignupStepTwo from "./SignupStepTwo";

const steps = ["Step 1", "Step 2"]; // Define your steps here

export const SignupForm = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    company: "",
    password: "",
    confirm_password: "",
    user_role_id: "",
    agreedTerms: false,
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    try {

      console.log("Response from server:", formData);
      // Make an HTTP POST request to your backend API
      const response = await axios.post(
        "http://localhost:5001/users/register",
        formData
      );

      sessionStorage.setItem("userData", JSON.stringify(response.data));
      // window.location.href = "/";

    } catch (error) {

      console.error("Error registering user:", error.message);
      
    }
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
      <div className="form_content">{getStepContent(activeStep)}</div>
      <div className="SignupButtonDiv">
        <Button
          className="SignupBackButton"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          className="SignupNextButton"
          variant="contained"
          color="primary"
          onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
          disabled={
            activeStep === steps.length - 1
              ? !formData.first_name ||
                !!formData.first_nameError ||
                !formData.last_name ||
                !!formData.last_nameError ||
                !formData.mobile ||
                !!formData.mobileError ||
                !formData.user_role_id||
                (formData.user_role_id === "65e94f2f9796d9bb2fe540df" &&
                  (!formData.company || !!formData.companyError))
              : !formData.agreedTerms ||
                !formData.username ||
                !!formData.usernameError ||
                !formData.email ||
                !!formData.emailError ||
                !formData.password ||
                !!formData.passwordError ||
                !formData.confirm_password ||
                !!formData.confirm_passwordError
          }
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
      {activeStep === 0 && (
        <div className="SignupLoginLinkDiv">
          <p>
            Already have an account?&emsp;
            <a className="SignupLoginLink" href="/login">
              Log in
            </a>
          </p>
        </div>
      )}
    </div>
  );
};
