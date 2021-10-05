import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            {/* <!-- footer and end of website --> */}

            <footer class="container row mx-auto  text-center py-5">

                <div className="col-lg-5 ">
                    <h1>Harvard Institute</h1>
                    <h4>Level-2,Capsul Market Nirala Morh, Tangail.</h4>
                    <p>Email: abc@gmail.com</p>
                </div>
                <div className="col-lg-3">
                    <NavLink className="link text-light" to="/home">Home</NavLink><br />
                    <NavLink className="link text-light" to="/about">About-Us</NavLink><br />
                    <NavLink className="link text-light" to="/moreservice">Services</NavLink><br />
                    <NavLink className="link text-light" to="/feature">Featurez</NavLink>
                </div>
                <div className="col-lg-4 mt-5">
                    <div className="text-center">
                        <i class="fab icons  fs-4 fa-instagram"></i>
                        <i class="fab icons mx-3 fs-4 fa-facebook-f"></i>
                        <i class="fab icons mx-3 fs-4 fa-linkedin-in"></i>
                        <i class="fab icons ms-3 fs-4 fa-twitter"></i>
                        <i class="fas icons fab ms-3 fs-4  fa-envelope"></i>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;