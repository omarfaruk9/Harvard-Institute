import React from 'react';
import { Link } from 'react-router-dom';
import notfound from "../../images/not-found.jpg";

const NotFound = () => {
    return (
        <div>
            <h1 className="text-center text-warning my-5 py-5">Page not Found 404</h1>
            <img className="w-50 mx-auto d-block" src={notfound} alt="" />

            <div className="text-center">
                <Link to="/home">
                    <button className="btn-lg btn-danger mt-3">Back to home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;