import React from "react";
import {Link, NavLink} from 'react-router-dom';
import './AppHeader.css';
import {useAuth} from "../auth/AuthProvider";

const AppHeader = ({onLogout}) => {
    let {isAuthenticated} = useAuth();

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
                                    <a onClick={onLogout}>Logout</a>
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