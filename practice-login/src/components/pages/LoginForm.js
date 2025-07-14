import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Track form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(email, password);
    if (success) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Log in</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="submit-container" style={{ marginTop: "30px" }}>
        <button className="submit" onClick={handleLogin}>Log in</button>
      </div>

      <div
        style={{ marginTop: "20px", cursor: "pointer", textAlign: "center" }}
        onClick={goToSignup}
      >
        Don’t have an account? <strong>Sign up</strong>
      </div>
    </div>
  );
};

export default LoginForm;
