import React,{useState} from "react";
// css
import "./Login.css";
import axios from "axios";
// images
import li from "./assets/images/Vector.png";
import go from "./assets/images/flat-color-icons_google.png";
import side from "./assets/images/Login-Illustration.png";

export const Login = () => {
  const [emailOrcontact_no, setEmailOrContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/users/login", {
        emailOrcontact_no: emailOrcontact_no,
        password: password,
      });
      // Handle successful login, e.g., redirect to dashboard
      console.log("Login success:", response.data);
      // Store credentials in session storage
      sessionStorage.setItem("userData", emailOrcontact_no);
      
      // Redirect to home page
      window.location.href = "/";
    } catch (error) {
      setError("Invalid email or password");
    }
  };


  return (
    <div className="login_container">
      <div className="login_body">
        <p className="login_heading">Log in</p>
        <div className="login_user">
          <p>Bussiness Account</p>
          <p>Individual Account</p>
        </div>
        <div className="login_with">
          <a href="https://googleauth.auth.us-west-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=3j4ac1591meve699sbf1ra4sra&redirect_uri=https://main.d2e3xxkohpdwwa.amplifyapp.com/">
            <img src={go} alt="img"></img>{" "}
            <span className="login_disable">Log in with google</span>
          </a>

          <a href="/">
            <img src={li} alt="img"></img>{" "}
            <span className="login_disable">Log in with linkdin</span>
          </a>
        </div>
        <div className="login_other">
          <p style={{ color: "#394867" }}>Log in with another provider</p>
          <p style={{ color: "#7B7979" }}>or</p>
          <p>use your email adress</p>
        </div>

        <form className="login_form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="emailOrcontact_no"
            placeholder="Enter your email or mobile number"
            value={emailOrcontact_no}
            onChange={(e) => setEmailOrContactNo(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">LOGIN</button>
        </form>
        <p
          style={{ fontSize: "0.938rem", color: "#394867", fontWeight: "600" }}
        >
          Forget Password ?
        </p>
      </div>
      <div className="login_side_picture">
        <img src={side} alt="" />
      </div>
    </div>
  );
};