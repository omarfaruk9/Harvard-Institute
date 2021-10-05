import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '.././../images/Educational-Logo.jpg';

const Header = () => {
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className="logo" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="link" to="/home">Home</NavLink>
                            <NavLink className="link" to="/about">About-Us</NavLink>
                            <NavLink className="link" to="/moreservice">Services</NavLink>
                            <NavLink className="link" to="/feature">Features</NavLink>
                            <NavLink className="link" to="/contact">Contact</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className=" text-center">
                <div className="container col-12">
                    <div className="intro-text">
                        <h1><span>Welcome Our 	Harvard Institute</span> </h1>
                        <span className="my-5 fs-2">Want To Get Enrolled!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;