import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const SignupForm = () => {
  const {signup} = useContext(AuthContext)
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSignup = () => {
    if (email && password && username) {
        signup (email, password, username);
        navigate("/dashboard");
    } else {
        alert("Please fill in all fields")
    }
    
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
          <input 
            type="text" 
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="input">
          <input 
            type="email" 
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="input">
          <input 
            type="password" 
            placeholder="Enter strong Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
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
