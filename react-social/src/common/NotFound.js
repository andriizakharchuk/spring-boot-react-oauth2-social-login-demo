import React from 'react';
import './NotFound.css';

const NotFound = () => {
    // <Link to="/">
    //     <button className="go-back-btn btn btn-primary" type="button">Go Back</button>
    // </Link> - 17
    return (
        <div className="page-not-found">
            <h1 className="title">
                404
            </h1>
            <div className="desc">
                The Page you're looking for was not found.
            </div>

        </div>
    );
}

export default NotFound;