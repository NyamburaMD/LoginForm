import React from "react";
import {useNavigate} from "react-router-dom";
import './SignupForm';

const LoginForm = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/dashboard")
    };
    const goToSignup = () => {
        navigate("/SignupForm")
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Log in</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <input type="email" placeholder="Your Email" />
                </div>
            </div>

            <div className="inputs">
                <div className="input">
                    <input type="password" placeholder="Enter Password" />
                </div>
            </div>

            <div className="submit-container">
                <div className="submit" onClick={handleLogin}>Log in</div>
            </div>

            <div style={{ marginTop: "10px", cursor: "pointer" }} onClick={goToSignup}>
                Don’t have an account? Sign up
            </div>
        </div>
    );
};


export default LoginForm;