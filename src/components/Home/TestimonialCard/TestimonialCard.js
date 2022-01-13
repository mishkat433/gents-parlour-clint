import React from 'react';
import "./TestimonalCard.css";
// import star from "../../../Icon/Group 33040.png"
import { Paper } from '@mui/material'

const TestimonialCard = (props) => {
    const { photo, fName, title, text}=props.item
    return (
        <div className="">
            <Paper>
            <div className="p-3 caro">
                <div className="test-head d-lg-flex mb-4">
                        <img className="test-img mt-3" src={photo} alt="" />
                    <h5 className="ml-3 mt-3 text-capitalize h4">{fName} <p className="h6">{title}</p></h5>
                </div>
                <p className="text-dark">{text}</p>
               
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                
            </div>
                {/* <Button className="CheckButton">
                    Check it out!
            </Button> */}
            </Paper>
        </div>
    );
};

export default TestimonialCard;