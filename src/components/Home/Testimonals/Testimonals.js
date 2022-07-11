import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import Carousel from 'react-material-ui-carousel'
import { Slide } from '@mui/material';

const Testimonals = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("https://journey20093.herokuapp.com/getReview")
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    return (
        <section className="container mt-5 mb-5">
            <h1 className="text-center mb-5">Testimonials</h1>

            <Carousel
                animation={Slide}
                index={1}
            >
                {
                    reviews.map((item, i) => <TestimonialCard key={i} item={item} />)
                }
            </Carousel>
        </section>
    );
};

export default Testimonals;