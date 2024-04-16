import React, {useEffect} from 'react';
import './Login.css';
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import SocialLogin from "./SocialLogin";
import LoginForm from "./LoginForm";
import {useAuth} from "../../auth/AuthProvider";

const Login = () => {
    let {isAuthenticated} = useAuth();
    let location = useLocation();
    let navigate = useNavigate();

    const redirectIfError = () => {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if (location.state && location.state.error) {
            setTimeout(() => {
                // Alert.error(location.state.error, {
                //     timeout: 5000
                // });
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
    // <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span> - 47
    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login to SpringSocial</h1>
                <SocialLogin/>
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <LoginForm />

            </div>
        </div>
    );
}

export default Login;
