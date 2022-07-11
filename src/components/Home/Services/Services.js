import React, { useEffect, useState } from 'react';
import "./Services.css";
import ServicesCard from '../ServicesCard/ServicesCard';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';


const Services = () => {
    const [loadServices, setLoadServices] = useState([])
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        fetch("https://journey20093.herokuapp.com/getservices")
            .then(res => res.json())
            .then(result => {
                setLoadServices(result)
                setSpinner(false)
            })
            .catch(err => {
                console.log(err.message)
                setSpinner(true)
            })
    }, [])
    return (
        <section className="container">
            <h1 className="text-center section-head mb-5 mt-5">Our awesome <span className="text-danger">services</span></h1>
            <div className="row">

                {
                    loadServices.map((data, index) => <ServicesCard services={data} key={index}></ServicesCard>)
                }
            </div>
            {
                spinner && <p className="apButton"><CircularProgress /></p>
            }
            <Link to="/dashboard" className="apButton"> <button className="btn header-btn mt-lg-1 mb-4">Get an Appointment</button></Link>
        </section>
    );
};

export default Services;