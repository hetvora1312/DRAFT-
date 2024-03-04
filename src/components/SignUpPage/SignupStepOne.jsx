import { React } from "react";
import { TextField, InputLabel } from "@mui/material";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

// Css
import './assets/css/SignupStepOne.css';

const StepOne = ({ formData, setFormData }) => {

  const handleCheckboxChange = (event) => {
    setFormData({ ...formData, agreedTerms: event.target.checked });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="username">Username</InputLabel>
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
      </div>
      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="email">Email</InputLabel>
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
      </div>
      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="password">Password</InputLabel>
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
      </div>
      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="cpassword">Confirm Password</InputLabel>
        <TextField
          id="cpassword"
          name="cpassword"
          type="password"
        className="SignupInput"
          value={formData.cpassword}
          onChange={handleChange}
          placeholder="-------------"
          fullWidth
          required
        />
        </div>

        <div className="form-field">
          <FormControlLabel className="SignupFormCheckbox"
            control={
              <Checkbox checked={formData.agreedTerms} onChange={handleCheckboxChange} />
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
