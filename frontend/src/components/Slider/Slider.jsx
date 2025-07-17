
import React from 'react';
import './Slider.css';
import img_1 from '../../assets/ankle-leggins.jpg';
import img_2 from '../../assets/cycling_short.jpg';
import img_3 from '../../assets/lycra-churithr-leggings.jpg';


const slides = [
    {
        id: 1,
        title: "Explore the Mountains",
        description: "Discover untouched beauty and breath-taking views.",
        img: img_1,
    },
    {
        id: 2,
        title: "Dive into the Ocean",
        description: "Experience the vibrant underwater life.",
        img: img_2,
    },
    {
        id: 3,
        title: "Wander the Forest",
        description: "Reconnect with nature among the trees.",
        img: img_3,
    },
];

const Slider = () => {
    return (
        <div id="uniqueCarousel" className="carousel slide unique-carousel bg-dark " data-bs-ride="carousel">
            <div className="carousel-indicators custom-indicators">
                {slides.map((slide, index) => (
                    <button key={slide.id} type="button" data-bs-target="#uniqueCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-label={`Slide ${index + 1}`}></button>
                ))}
            </div>

            <div className="carousel-inner ">
                {slides.map((slide, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={slide.id}>
                        <img height={'300px'} src={slide.img} className="d-block w-100" alt={slide.title} />
                        <div className="carousel-caption d-none d-md-block custom-caption">
                            <h5>{slide.title}</h5>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#uniqueCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#uniqueCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;

