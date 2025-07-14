import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm/>} />
            <Route path="signup" element={<SignupForm/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    );
};
export default AppRoutes;