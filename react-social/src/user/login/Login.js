import React, {useEffect} from 'react';
import './Login.css';
import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom'
import SocialLogin from "./SocialLogin";
import LoginForm from "./LoginForm";
import {useAuth} from "../../auth/AuthProvider";
import {toast} from "react-toastify";

const Login = () => {
    const {isAuthenticated} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const redirectIfError = () => {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if (location.state && location.state.error) {
            setTimeout(() => {
                toast(location.state.error, {
                    type: "error"
                });
                navigate(location.pathname, {replace: true, state: {}})
            }, 100);
        }
    }

    useEffect(() => {
        redirectIfError()
    }, []);

    if (isAuthenticated) {
        return <Navigate to="/" replace={true} state={{from: location}}/>;
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login to SpringSocial</h1>
                <SocialLogin/>
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <LoginForm />
                <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
            </div>
        </div>
    );
}

export default Login;
