import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import DetailsService from '../DetailsService/DetailsService';
const MoreService = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('./details.JSON')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);
    return (
        <div className="container">
            <h1 className="text-center text-danger fw-bolder mt-5"> More Service Here</h1>
            <Row className="service-section g-4 row row-cols-lg-3 row-cols-md-2 row-cols-1">
                {
                    details.map(detail => <DetailsService detail={detail}></DetailsService>)
                }
            </Row>
        </div>
    );
};

export default MoreService;