import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container pb-4">
                <div className="row pt-5 text-white fott">
                    <div className="col-lg-5">
                        <address className="h6"><i className="fa fa-map-marker"></i> New Horizone city, Aggrabad, Chittagong, Bangladesh.</address>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="f-head mb-3 mtt">Company</h5>
                        <div className="link">
                            <Link to="/">Home</Link>
                            <Link to="/">project</Link>
                            <Link to="/">Our team</Link>
                            <Link to="/">Terma & condition</Link>
                            <Link to="/">submit listing</Link>
                        </div>
                    </div>
                    <div className="col-lg-2 mtt">
                        <h5 className="f-head mb-3">Company</h5>
                        <div className="link">
                            <Link to="/">quick links</Link>
                            <Link to="/">details</Link>
                            <Link to="/">sales</Link>
                            <Link to="/">contact</Link>
                            <Link to="/home">our blog</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 mtt">
                        <h5 className="f-head mb-3">Company</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, doloremque.</p>
                        <div className="icon">
                            <i className="fab fa-facebook-f mr-4"></i>
                            <i className="fab fa-twitter mr-4"></i>
                            <i className="fab fa-instagram mr-4"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <h6 className="mt-5 text-dark text-center"> &copy;Mishkat-{new Date().getFullYear()}</h6>
            </div>
            
        </div>
    );
};

export default Footer;