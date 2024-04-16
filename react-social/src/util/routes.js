import React from "react";
import Home from "../home/Home";
import Profile from "../user/profile/Profile";
import Login from "../user/login/Login";
import Signup from "../user/signup/Signup";
import OAuth2RedirectHandler from "../user/oauth2/OAuth2RedirectHandler";

const routesList = [{
    path: "/",
    element: <Home/>,
    children: [
        {
            path: "/profile",
            element: <Profile />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/login",
            element: <Signup />
        },
        {
            path: "/oauth2/redirect",
            element: <OAuth2RedirectHandler />
        },
    ]
}];

export default routesList;