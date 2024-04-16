import React from 'react';
import './Signup.css';
import SignupForm from "./SignupForm";
import SocialSignup from "./SocialSignup";
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";

const Signup = () => {
    let {isAuthenticated} = useAuth();
    let location = useLocation();

    if (isAuthenticated) {
        return <Navigate to="/" replace state={{from: location}}/>;
    }
    // <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span> - 25
    return (
        <div className="signup-container">
            <div className="signup-content">
                <h1 className="signup-title">Signup with SpringSocial</h1>
                <SocialSignup/>
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <SignupForm />

            </div>
        </div>
    );
}

export default Signup