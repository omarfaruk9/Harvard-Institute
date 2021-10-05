import React, { useEffect, useState } from 'react';
import './Home.css'
import { Row } from 'react-bootstrap';
import Features from '../Features/Features';
import Service from '../Service/Service';
import About from '../About/About';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="container">
                <h1 className="text-center text-danger mt-5 fw-bolder">Our Service</h1>
                <Row className="service-section g-4 row row-cols-lg-3 row-cols-md-2 row-cols-1">
                    {
                        courses.map(course => <Service course={course}></Service>)
                    }
                </Row>
            </div>

            <div className="features">
                <Features></Features>
            </div>
            <div className="about">
                <About></About>
            </div>
        </div>
    );
};

export default Home;