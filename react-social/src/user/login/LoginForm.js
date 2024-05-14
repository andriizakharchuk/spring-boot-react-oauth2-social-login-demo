import React, {useState} from "react";
import {request} from "../../util/APIUtils";
import {ACCESS_TOKEN, API_BASE_URL} from "../../constants";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useAuth} from "../../auth/AuthProvider";

const LoginForm = () => {
    const navigate = useNavigate();
    let {login} = useAuth();

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const loginRequest = (loginRequest) => {
        return request({
            url: API_BASE_URL + "/auth/login",
            method: 'POST',
            body: JSON.stringify(loginRequest)
        });
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        setState(prevState => ({
            ...prevState,
            [inputName]: inputValue
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginRequestObject = Object.assign({}, state);

        loginRequest(loginRequestObject)
            .then(userData => {
                login(userData);
                localStorage.setItem(ACCESS_TOKEN, userData.accessToken);
                toast("You're successfully logged in!");
                navigate("/");
            }).catch(error => {
            toast((error && error.message) || 'Oops! Something went wrong. Please try again!', {
                className: "error"
            });
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <input type="email" name="email"
                       className="form-control" placeholder="Email"
                       value={state.email} onChange={handleInputChange} required/>
            </div>
            <div className="form-item">
                <input type="password" name="password"
                       className="form-control" placeholder="Password"
                       value={state.password} onChange={handleInputChange} required/>
            </div>
            <div className="form-item">
                <button type="submit" className="btn btn-block btn-primary">Login</button>
            </div>
        </form>
    );
}

export default LoginForm;