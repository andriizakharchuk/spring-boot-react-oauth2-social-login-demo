import React from "react";
import {Link, NavLink} from 'react-router-dom';
import './AppHeader.css';
import {useAuth} from "../auth/AuthProvider";
import {toast} from "react-toastify";

const AppHeader = () => {
    const {isAuthenticated, logout} = useAuth();

    const logoutUser = () => {
        logout();
        toast("You're safely logged out!");
    }

    return (
        <header className="app-header">
            <div className="container">
                <span className="app-branding">
                    <Link to="/">Spring Social</Link>
                </span>
                <span className="app-options">
                    <nav className="app-nav">
                        {isAuthenticated ? (
                            <ul>
                                <li>
                                    <NavLink to="/profile">Profile</NavLink>
                                </li>
                                <li>
                                    <a onClick={logoutUser}>Logout</a>
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup">Signup</NavLink>
                                </li>
                            </ul>
                        )}
                    </nav>
                </span>
            </div>
        </header>
    )
}

export default AppHeader;