import React from "react";
import {request} from "../../util/APIUtils";
import {useState} from "react";
import {API_BASE_URL} from "../../constants";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const SignupForm = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const signup = (signupRequest) => {
        return request({
            url: API_BASE_URL + "/auth/signup",
            method: 'POST',
            body: JSON.stringify(signupRequest)
        });
    }

    const handleInputChange = event => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const signUpRequest = Object.assign({}, formState);
        signup(signUpRequest)
            .then(response => {
                toast("You're successfully registered. Please login to continue!");
                navigate("/login");
            }).catch(error => {
            toast((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <input type="text" name="name"
                       className="form-control" placeholder="Name"
                       value={formState.name} onChange={handleInputChange} required/>
            </div>
            <div className="form-item">
                <input type="email" name="email"
                       className="form-control" placeholder="Email"
                       value={formState.email} onChange={handleInputChange} required/>
            </div>
            <div className="form-item">
                <input type="password" name="password"
                       className="form-control" placeholder="Password"
                       value={formState.password} onChange={handleInputChange} required/>
            </div>
            <div className="form-item">
                <button type="submit" className="btn btn-block btn-primary">Sign Up</button>
            </div>
        </form>
    );

}

export default SignupForm;