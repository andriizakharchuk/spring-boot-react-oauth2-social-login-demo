import React from 'react';
import './Home.css';
import Circle from "./Circle";

const CIRCLE_AMOUNT = 12;

const Home = () => {
    return (
        <div className="home-container">
            <div className="container">
                <div className="graf-bg-container">
                    <div className="graf-layout">
                        {Array.from({length: CIRCLE_AMOUNT}, (_, i) =>
                            <Circle key={i}/>)}
                    </div>
                </div>
                <h1 className="home-title">Spring Boot React OAuth2 Social Login Demo</h1>
            </div>
        </div>
    )
}

export default Home;