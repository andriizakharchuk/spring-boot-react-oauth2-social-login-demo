import React from "react";

const Button = ({className, href, logo, altText}) => {
    return (
        <a className={`btn btn-block social-btn ${className}`} href={href}>
            <img src={logo} alt={altText}/> Sign up with {altText}</a>
    )
}

export default Button;