import React from 'react';
import notfound from "../../images/not-found.jpg";

const NotFound = () => {
    return (
        <div>
            <h1 className="text-center text-warning my-5 py-5">Page not Found 404</h1>
            <img className="w-50 mx-auto d-block" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;