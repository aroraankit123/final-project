import React from "react";
import { Carousel, Button } from 'react-bootstrap';
import './Header.css';

function Header() {
    return (
        <Carousel>
            <Carousel.Item className="height-img">
                <img
                    className="d-block w-100"
                    src="/images/company-3327151.jpg"
                    alt="First slide"
                />
                {/* <div className="carousel-caption d-none d-md-block text-left">
                    <h3 className="header-text">Our cars, your dreams.</h3>
                    <p className="header-text">Experience the best ride of your life with our well-maintained and comfortable cars.</p>
                    <Button variant="primary w-25 mx-auto">Rent Now</Button>
                </div> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/Saarthi1.jpg"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/image/a5.jpg"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default Header;