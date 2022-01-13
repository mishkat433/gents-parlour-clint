import React from 'react';
import "./Header.css";
import HeaderPhoto from "../../../Image/HeaderPhoto.png"
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <Navbar></Navbar>
            <div className="container">
                
                <div className="row display">
                    <div className="col-lg-6">
                        <h1 className="header-head text-uppercase">Beauty salone<br /> for every gents</h1>
                        <p className="text-muted mt-lg-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, ipsam harum dolorem maxime accusamus mollitia dolor? Cum error modi suscipit ducimus praesentium ullam molestias.</p>
                       <Link to="/dashboard"> <button className="btn header-btn mt-lg-4">Get an Appointment</button></Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="header-right">
                            <img className="headerPhoto" src={HeaderPhoto} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;