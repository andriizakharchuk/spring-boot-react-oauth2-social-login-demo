import React, {createContext, useContext, useState} from 'react';
import {ACCESS_TOKEN} from "../constants";

export const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const logout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        setIsAuthenticated(false);
        setCurrentUser(null);
    }

    const login = (userData) => {
        setIsAuthenticated(true);
        setCurrentUser(userData);
    }

    const value = {
        isAuthenticated,
        currentUser,
        login,
        logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}