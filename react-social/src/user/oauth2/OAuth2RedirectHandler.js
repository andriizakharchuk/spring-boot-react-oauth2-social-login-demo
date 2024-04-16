import React from 'react';
import {ACCESS_TOKEN} from '../../constants';
import {Navigate} from "react-router-dom";

const getUrlParameter = (name, location) => {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const OAuth2RedirectHandler = (props) => {

    const token = getUrlParameter('token', props.location);
    const error = getUrlParameter('error', props.location);

    if (token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        return <Navigate to="/" replace={true} state={{from: props.location}}/>;
    } else {
        return <Navigate to="/" replace={true} state={{
            from: props.location,
            error: error
        }}/>;
    }
}

export default OAuth2RedirectHandler;