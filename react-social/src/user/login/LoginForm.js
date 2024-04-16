import React from "react";
import {request} from "../../util/APIUtils";
import {ACCESS_TOKEN, API_BASE_URL} from "../../constants";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const login = (loginRequest) => {
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

        const loginRequest = Object.assign({}, state);

        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                // Alert.success("You're successfully logged in!");
                navigate("/");
            }).catch(error => {
            // Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
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