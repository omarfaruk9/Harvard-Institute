import React from 'react';
import './DetailsService.css';
import { Card, Col } from 'react-bootstrap';

const DetailsService = (props) => {
    const { title, image, price, course_du, info } = props.detail;
    return (
        <div>
            <Col className="">
                <Card style={{ height: '100%' }}>
                    <Card.Img variant="top" src={image} className="image" />
                    <Card.Body>
                        <div>
                            <Card.Title className="title"><h1>{title}</h1></Card.Title>
                            <h3>{course_du}</h3>
                            <h5>Course fee: {price}</h5>
                            <p>{info}</p>
                        </div>
                        <Card.Text>
                            <button className="btn btn-outline-danger btn-success text-light">Continue Course</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default DetailsService;