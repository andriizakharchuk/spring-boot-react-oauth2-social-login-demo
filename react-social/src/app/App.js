import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import LoadingIndicator from '../common/LoadingIndicator';
import {ACCESS_TOKEN} from '../constants';
import './App.css';
import NotFound from "../common/NotFound";
import OAuth2RedirectHandler from "../user/oauth2/OAuth2RedirectHandler";
import Home from "../home/Home";
import Profile from "../user/profile/Profile";
import Login from "../user/login/Login";
import Signup from "../user/signup/Signup";
import PrivateRoute from "../auth/PrivateRoute";
import {useAuth} from "../auth/AuthProvider";

const App = () => {
    const [loading, setLoading] = useState(true);
    const {loadCurrentlyLoggedInUser} = useAuth();

    const handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        // Alert.success("You're safely logged out!");
    }

    useEffect(() => {
        loadCurrentlyLoggedInUser(setLoading);
    }, []);

    if (loading) {
        return <LoadingIndicator/>
    }

    return (
        <div className="app">
            <BrowserRouter>
                <div className="app-top-box">
                    <AppHeader onLogout={handleLogout}/>
                </div>
                <div className="app-body">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler/>}/>
                        <Route element={<NotFound/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
            {/*<Alert stack={{limit: 3}}*/}
            {/*       timeout={3000}*/}
            {/*       position='top-right' effect='slide' offset={65}/>*/}
        </div>
    );
}

export default App;
