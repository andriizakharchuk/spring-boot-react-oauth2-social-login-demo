import React, {createContext, useContext, useState} from 'react';
import {ACCESS_TOKEN, API_BASE_URL} from "../constants";
import {request} from "../util/APIUtils";

export const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    const getCurrentUser = () => {
        if (!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("No access token set.");
        }

        return request({
            url: API_BASE_URL + "/user/me",
            method: 'GET'
        });
    }

    const loadCurrentlyLoggedInUser = (setLoading) => {
        getCurrentUser()
            .then(response => {
                setCurrentUser(response);
                setIsAuthenticated(true);
                setLoading(false);
            }).catch(error => {
                setCurrentUser(null);
                setIsAuthenticated(false);
                setLoading(false);
            }
        );
    }

    const value = {
        isAuthenticated,
        currentUser,
        loadCurrentlyLoggedInUser,
        login,
        logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}