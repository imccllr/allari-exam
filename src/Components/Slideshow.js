import React from 'react';
import '../Styles/Slideshow.scss';
import Carousel from "nuka-carousel"

const Slideshow = () => {
    return (
        <div className="slideshow-container">
            <Carousel className="slideshow">
                <div className="slideshow-slide"><img src="img/1.jpg" /></div>
                <div className="slideshow-slide"><img src="img/2.jpg" /></div>
                <div className="slideshow-slide"><img src="img/3.jpg" /></div>
            </Carousel>
        </div>
    );
}

export default Slideshow;