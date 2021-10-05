import React from 'react';
import './Features.css'
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/img-1.jpg'
import img2 from '../../images/img-2.jpg'
import img3 from '../../images/img-3.jpg'

const Features = () => {
    return (
        <div className="container ">
            <h1 className="text-center title fw-bolder">Our Experience Trainer</h1>
            <div className="feature">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 carousel-img"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <span className="fs-1 fw-bold bg-danger p-2 rounded-3">Kids Teacher</span><br /><br />
                            <p className="fw-bold bg-danger p-2 rounded-3 w-75 mx-auto">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 carousel-img"
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <span className="fs-1 fw-bold bg-danger p-2 rounded-3">Special care</span><br /><br />
                            <p className="fw-bold bg-danger p-2 rounded-3 w-75 mx-auto">We are give you best support in our courses.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <span className="fs-1 fw-bold bg-danger p-2 rounded-3">Special Batch</span><br /><br />
                            <p className="fw-bold bg-danger p-2 rounded-3 w-75 mx-auto">
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Features;