import React from 'react';
import { TextField, InputLabel, Select, MenuItem } from '@mui/material';

// Css
import './assets/css/SignupStepTwo.css';

const StepTwo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="SignUpNameDiv">
        <div className="form-field">
          <InputLabel className="SignupFormlabel" htmlFor="fname">First Name</InputLabel>
          <TextField
            id="fname"
            className="SignupInput"
            name="fname"
            type="text"
            value={formData.fname}
            onChange={handleChange}
            required
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-field">
          <InputLabel className="SignupFormlabel" htmlFor="lname">Last Name</InputLabel>
          <TextField
            id="lname"
            className="SignupInput"
            name="lname"
            type="text"
            value={formData.lname}
            onChange={handleChange}
            required
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="phone">Phone</InputLabel>
        <TextField
          id="phone"
          className="SignupInput"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
          fullWidth
        />
      </div>

      <div className="form-field">
        <InputLabel className="SignupFormlabel" htmlFor="company">Company</InputLabel>
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
      </div>

      <div className="form-field">
      <InputLabel className="SignupFormlabel" htmlFor="userType">User Type</InputLabel>
      <Select
        id="userType"
        className="SignupInput"
        name="userType"
        value={formData.userType || ""}
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
    </>
  );
};

export default StepTwo;
