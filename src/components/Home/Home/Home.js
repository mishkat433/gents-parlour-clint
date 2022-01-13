import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Headers/Header';
import Professional from '../Professional/Professional';
import Services from '../Services/Services';
import Testimonals from '../Testimonals/Testimonals';
import "./Home.css"

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Services></Services>
            <Professional></Professional>
            <Testimonals></Testimonals>
            <Contact></Contact>
        </div>
    );
};

export default Home;