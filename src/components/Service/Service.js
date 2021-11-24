import React from 'react';
import './Service.css';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props);
    const { title, image, info, course_du, price } = props.course;
    return (
        <div>
            <Col className="mt-0">
                <Card className="h-100 service-card1  shadow">
                    <Card.Img variant="top" src={image} className="image" />
                    <Card.Body>
                        <Card.Title className="tex"><h1>{title}</h1></Card.Title>
                        <Card.Text>
                            <h3>{course_du} <i class="far fa-clock"></i></h3>
                            <h5>Course fee: {price}</h5>
                            <p>{info}</p>
                            <Link to="moreservice">
                                <button className="btn btn-outline-danger btn-success text-light">More service</button>
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;