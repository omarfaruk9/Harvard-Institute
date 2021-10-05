import React from 'react';
import './About.css'
import { Card, Col, Row } from 'react-bootstrap';
import about_img1 from '../../images/about-1.jpg';
import about_img2 from '../../images/about-2.jpg';
import about_img3 from '../../images/about-3.jpg';

const About = () => {
    return (
        <div className="container my-5">
            <div className="about-text">
                <h1 className="text-center">About Us</h1>
                <p className="w-50 mx-auto mb-5 text-light">
                    Our teachers grade each lesson with care. They make comments that address each student’s areas of strength and challenge with expertise and compassion. Grades, comments and student progress can be viewed online by students and parents at our easy-to-access, easy-to-use interactive grade book.
                </p>
            </div>
            <Row xs={1} md={3} className="g-4">

                <Col>
                    <Card className="card-bg">
                        <Card.Img variant="top" className="about-img" src={about_img1} />
                        <Card.Body>
                            <Card.Title>Mr. Akash</Card.Title>
                            <Card.Footer>
                                <p>
                                    A teacher is responsible for preparing lesson plans and educating students at all levels.his content is a little bit longer.
                                </p>
                                <div className="text-center">
                                    <i class="fab icons  fs-4 fa-instagram"></i>
                                    <i class="fab icons mx-3 fs-4 fa-facebook-f"></i>
                                    <i class="fab icons mx-3 fs-4 fa-linkedin-in"></i>
                                    <i class="fab icons ms-3 fs-4 fa-twitter"></i>
                                    <i class="fas icons fab ms-3 fs-4  fa-envelope"></i>

                                </div>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-bg">
                        <Card.Img variant="top" className="about-img" src={about_img2} />
                        <Card.Body>
                            <Card.Title>Mst. Angelina</Card.Title>

                            <Card.Footer>
                                <p>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                                <div className="text-center">
                                    <i class="fab icons  fs-4 fa-instagram"></i>
                                    <i class="fab icons mx-3 fs-4 fa-facebook-f"></i>
                                    <i class="fab icons mx-3 fs-4 fa-linkedin-in"></i>
                                    <i class="fab icons ms-3 fs-4 fa-twitter"></i>
                                    <i class="fas icons fab ms-3 fs-4  fa-envelope"></i>

                                </div>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-bg">
                        <Card.Img variant="top" className="about-img" src={about_img3} />
                        <Card.Body>
                            <Card.Title>Elizabeth</Card.Title>

                            <Card.Footer>
                                <p>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                                <div className="text-center">
                                    <i class="fab icons   fs-4 fa-instagram"></i>
                                    <i class="fab icons  mx-3 fs-4 fa-facebook-f"></i>
                                    <i class="fab icons  mx-3 fs-4 fa-linkedin-in"></i>
                                    <i class="fab icons  ms-3 fs-4 fa-twitter"></i>
                                    <i class="fas icons  fab ms-3 fs-4  fa-envelope"></i>
                                </div>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div >
    );
};

export default About;