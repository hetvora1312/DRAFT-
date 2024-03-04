import { React } from "react";
import { TextField, InputLabel , Checkbox, FormControlLabel, Typography } from "@mui/material";

// Css
import "./assets/css/SignupStepOne.css";

const StepOne = ({ formData, setFormData }) => {



  const handleCheckboxChange = (event) => {
    setFormData({ ...formData, agreedTerms: event.target.checked });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Define regular expressions for validation
    const validationRules = {
      username: /^[a-z][a-z0-9_]*$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/,
      password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&#])[A-Za-z\d@$!%^*?&#]{8,30}$/,
    };

    // Define error messages for each field
    const errorMessages = {
      username:
        "Username should start with a lowercase alphabet and only contain lowercase alphabets, numbers, and underscores.",
      email: "Please enter a valid email address.",
      password:
        "Password must be 8-30 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one number.",
      confirm_password: "Passwords do not match.",
    };

  

    // Perform validation
    let isValid = true;

    if (name === "confirm_password" && value !== formData.password) {
      isValid = false;
    } else if (validationRules[name]) {
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
      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="username">
          Username
        </InputLabel>
        <TextField
          id="username"
          name="username"
          type="text"
          className="SignupInput"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          fullWidth
          required
        />
        {formData.usernameError && (
          <Typography variant="body2" color="error">
            {formData.usernameError}
          </Typography>
        )}
      </div>

      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="email">
          Email
        </InputLabel>
        <TextField
          id="email"
          name="email"
          type="email"
          className="SignupInput"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          fullWidth
          required
        />
        {formData.emailError && (
          <Typography variant="body2" color="error">
            {formData.emailError}
          </Typography>
        )}
      </div>

      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="password">
          Password
        </InputLabel>
        <TextField
          id="password"
          name="password"
          type="password"
          className="SignupInput"
          value={formData.password}
          onChange={handleChange}
          placeholder="-------------"
          fullWidth
          required
        />
        {formData.passwordError && (
          <Typography variant="body2" color="error">
            {formData.passwordError}
          </Typography>
        )}
      </div>

      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="cpassword">
          Confirm Password
        </InputLabel>
        <TextField
          id="confirm_password"
          name="confirm_password"
          type="password"
          className="SignupInput"
          value={formData.confirm_password}
          onChange={handleChange}
          placeholder="-------------"
          fullWidth
          required
        />
        {formData.confirm_passwordError && (
          <Typography variant="body2" color="error">
            {formData.confirm_passwordError}
          </Typography>
        )}
      </div>

      <div className="form-field">
        <FormControlLabel
          className="SignupFormCheckbox"
          control={
            <Checkbox
              checked={formData.agreedTerms}
              onChange={handleCheckboxChange}
            />
          }
          label={
            <Typography variant="body1">
              I have read and agree with the Terms of Use Client Agreement and
              Privacy Policy
            </Typography>
          }
        />
      </div>
    </>
  );
};

export default StepOne;
