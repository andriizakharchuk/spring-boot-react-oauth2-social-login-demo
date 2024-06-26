import {ACCESS_TOKEN, API_BASE_URL} from '../constants';

export function request(options) {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem(ACCESS_TOKEN) !== 'undefined') {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function getCurrentUser() {
    const token = localStorage.getItem(ACCESS_TOKEN);
    console.log(token)
    if (token === 'undefined' || token === null) {
        return Promise.reject("No access token set.");
    }
    if (token === 'undefined' || token === null) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}
