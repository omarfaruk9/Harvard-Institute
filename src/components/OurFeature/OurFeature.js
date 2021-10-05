import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
const OurFeature = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center fw-bolder text-danger my-3">Our Features</h1>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title> <i class="fas fs-1 fa-lightbulb"></i></Card.Title>
                            <Card.Text>
                                A teacher is responsible for preparing lesson plans and educating students at all levels.his content is a little bit longer.
                            </Card.Text>
                            <Card.Footer>
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
                    <Card>
                        <Card.Body>
                            <Card.Title> <i class="fas fs-1 fa-rocket"></i></Card.Title>
                            <Card.Text>
                                A teacher is responsible for preparing lesson plans and educating students at all levels.his content is a little bit longer.
                            </Card.Text>
                            <Card.Footer>
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
                    <Card>
                        <Card.Body>
                            <Card.Title><i class="fas fs-1 fa-hands-helping"></i></Card.Title>
                            <Card.Text>
                                A teacher is responsible for preparing lesson plans and educating students at all levels.his content is a little bit longer.
                            </Card.Text>
                            <Card.Footer>
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
            </Row>
        </div>
    );
};

export default OurFeature;