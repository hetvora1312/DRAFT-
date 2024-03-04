import React from "react";
import { TextField, InputLabel, Select, MenuItem ,Typography } from "@mui/material";

// Css
import "./assets/css/SignupStepTwo.css";

const StepTwo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValid = true;

    // Define regular expressions for validation
    const validationRules = {
      first_name: /^[a-zA-Z]+$/,
      last_name: /^[a-zA-Z]+$/,
      company: /^[a-zA-Z\s.!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]+$/,
      mobile: /^\d{10}$/,
    };

    // Define error messages for each field
    const errorMessages = {
      first_name: "First name should contain only alphabets.",
      last_name: "Last name should contain only alphabets.",
      company:
        "Company name should contain only alphabets, dots, spaces, and special characters (' and @).",
      mobile: "Phone number should be 10 digits long.",
    };

    // Perform validation
    if (validationRules[name]) {
      isValid = validationRules[name].test(value);
    }

    // Set error message or clear error message based on validation result
    setFormData({
      ...formData,
      [name]: value,
      [`${name}Error`]: isValid ? "" : errorMessages[name],
    });
  };

  return (
    <>
      <div className="SignUpNameDiv">
        <div className="form-field">
          <InputLabel className="SignupFormlabel" htmlFor="fname">
            First Name
          </InputLabel>
          <TextField
            id="first_name"
            className="SignupInput"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
            required
            placeholder="Enter your first name"
          />
          {formData.first_nameError && (
            <Typography variant="body2" color="error">
              {formData.first_nameError}
            </Typography>
          )}
        </div>

        <div className="form-field">
          <InputLabel className="SignupFormlabel" htmlFor="lname">
            Last Name
          </InputLabel>
          <TextField
            id="last_name"
            className="SignupInput"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
            required
            placeholder="Enter your last name"
          />
          {formData.last_nameError && (
            <Typography variant="body2" color="error">
              {formData.last_nameError}
            </Typography>
          )}
        </div>
      </div>

      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="phone">
          Phone
        </InputLabel>
        <TextField
          id="mobile"
          className="SignupInput"
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
          fullWidth
        />
        {formData.mobileError && (
          <Typography variant="body2" color="error">
            {formData.mobileError}
          </Typography>
        )}
      </div>

      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="userType">
          User Type
        </InputLabel>
        <Select
          id="role"
          className="SignupInput"
          name="role"
          value={formData.role || ""}
          onChange={handleChange}
          required
          fullWidth
          displayEmpty
        >
          <MenuItem value="" disabled>
            User Type
          </MenuItem>
          <MenuItem value="customer">Customer</MenuItem>
          <MenuItem value="partner">Partner</MenuItem>
        </Select>
      </div>

      {formData.role === "partner" && (
        <div className="form-field">
          <InputLabel className="SignupFormlabel" htmlFor="company">
            Company
          </InputLabel>
          <TextField
            id="company"
            className="SignupInput"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter your company name"
            fullWidth
          />
          {formData.companyError && (
            <Typography variant="body2" color="error">
              {formData.companyError}
            </Typography>
          )}
        </div>
      )}
    </>
  );
};

export default StepTwo;
