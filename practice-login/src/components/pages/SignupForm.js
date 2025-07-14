import React from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/dashboard");
  };

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="Enter Username" />
        </div>
        <div className="input">
          <input type="email" placeholder="Enter Email Address" />
        </div>
        <div className="input">
          <input type="password" placeholder="Enter strong Password" />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleSignup}>Sign up</div>
      </div>

      <div style={{ marginTop: "10px", cursor: "pointer" }} onClick={goToLogin}>
        Already have an account? Log in
      </div>
    </div>
  );
};

export default SignupForm;
