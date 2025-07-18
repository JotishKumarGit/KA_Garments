import React from 'react';
import './Homepage.css';

const cardData = [
    {
        icon: "bi-emoji-smile",
        title: "Comfort Fit Leggings",
        description:
            "Designed with soft, breathable fabric that moves with you, offering ultimate comfort all day long.",
        iconColor: "text-primary",
    },
    {
        icon: "bi-brush",
        title: "Stylish Printed Leggings",
        description:
            "Featuring vibrant patterns and bold prints, perfect for making a fashion statement during workouts or casual wear.",
        iconColor: "text-danger",
    },
    {
        icon: "bi-lightning-charge",
        title: "Performance Leggings",
        description:
            "High-performance leggings with moisture-wicking technology and four-way stretch for maximum flexibility and durability.",
        iconColor: "text-success",
    },
    {
        icon: "bi-shield-check",
        title: "Compression Leggings",
        description:
            "Offers targeted support and improved circulation, ideal for athletes and those looking for muscle recovery benefits.",
        iconColor: "text-warning",
    },
    {
        icon: "bi-leaf",
        title: "Eco-Friendly Leggings",
        description:
            "Made from sustainable, recycled materials that reduce environmental impact without compromising quality or comfort.",
        iconColor: "text-success",
    },
];

const Card = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                {cardData.map(({ icon, title, description, iconColor }, index) => (
                    <div
                        key={index}
                        className="col-12 col-sm-6 col-md-4 mb-4 d-flex align-items-stretch"
                    >
                        <div className="card p-4 shadow-lg text-center w-100">
                            <div className={`mb-3`}>
                                <i className={`bi ${icon} display-4 ${iconColor}`}></i>
                            </div>
                            <h5 className="fw-bold">{title}</h5>
                            <p className="text-muted">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
