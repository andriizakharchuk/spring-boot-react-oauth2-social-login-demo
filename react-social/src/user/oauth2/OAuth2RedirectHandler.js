import React from 'react';
import {ACCESS_TOKEN} from '../../constants';
import {Navigate, useLocation} from "react-router-dom";

const getUrlParameter = (name, location) => {

    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const OAuth2RedirectHandler = () => {
    const location = useLocation();

    const token = getUrlParameter('token', location);

    if (token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        return <Navigate to="/" replace={true} state={{from: location}}/>;
    } else {
        const error = getUrlParameter('error', location);
        return <Navigate to="/" replace={true} state={{
            from: location,
            error: error
        }}/>;
    }
}

export default OAuth2RedirectHandler;