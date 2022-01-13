import React from 'react';
import "./Professional.css";
import faceClean from "../../../Image/professionalImage.jpg";

const Professional = () => {
    return (
        <section className="professional">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="professional-image" src={faceClean} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="section-head mtt"> Let us handle your <br/> screen <span className="text-danger">Professionally</span>.</h1>
                        <p className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus commodi, numquam optio iure et laudantium possimus. Vero provident modi voluptatibus.</p>
                        <div className="count d-flex mt-5">
                            <h1 className="text-center text-danger mr-5">500+ <p className="text-dark h5">Happy customer</p></h1>
                            <h1 className="text-center text-danger ml-5">15+ <p className="text-dark h5">Total serveces</p></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Professional;