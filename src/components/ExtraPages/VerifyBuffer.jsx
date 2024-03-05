import { React, useEffect } from "react";
import { Link } from "react-router-dom";

// css
import "./assets/css/VerifyBuffer.css";

export const VerifyBuffer = () => {
  useEffect(() => {
    // Set body class when component mounts
    document.body.className = "VerifyPageBody";

    // Clean up function to remove body class when component unmounts
    return () => {
      document.body.className = "";
    };
  }, []);

  const handleLogout = () => {
    // Delete session storage
    sessionStorage.removeItem("userData");
  };

  return (
    <div className="VerifyBufferDiv">
      <p className="VerifyBufferText">Verification Ongoing...</p>
      <Link onClick={handleLogout} to="/login">
        Sign Out
      </Link>
    </div>
  );
};
