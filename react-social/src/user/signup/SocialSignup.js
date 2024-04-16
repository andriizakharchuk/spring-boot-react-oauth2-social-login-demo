import React from 'react';
import {FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, GOOGLE_AUTH_URL} from "../../constants";
import googleLogo from "../../img/google-logo.png";
import fbLogo from "../../img/fb-logo.png";
import githubLogo from "../../img/github-logo.png";
import './SocialSignup.css';
import Button from "./Button";

const SocialSignup = () => {
    return (
        <div className="social-signup">
            <Button className="google" logo={googleLogo} href={GOOGLE_AUTH_URL} altText="Google"/>
            <Button className="facebook" logo={fbLogo} href={FACEBOOK_AUTH_URL} altText="Facebook"/>
            <Button className="github" logo={githubLogo} href={GITHUB_AUTH_URL} altText="Github"/>
        </div>
    );
}

export default SocialSignup;