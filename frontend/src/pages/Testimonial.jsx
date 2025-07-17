import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
    {
        name: 'Sarah Johnson',
        title: 'Marketing Director',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        quote: 'This service exceeded all expectations. Professional, fast, and reliable!',
    },
    {
        name: 'James Smith',
        title: 'CEO, Techify',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        quote: 'Our productivity has increased thanks to this amazing tool!',
    },
    {
        name: 'Emily Davis',
        title: 'UX Designer',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        quote: 'Clean design and easy to use. Highly recommended!',
    },
];

const Testimonial = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="container py-5" id="testimonials">
            <h2 className="text-center mb-5">What Our Clients Say</h2>
            <div className="row g-4">
                {testimonials.map((t, index) => (
                    <div
                        className="col-md-4"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <div className="card h-100 shadow-lg border-0">
                            <div className="card-body text-center">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="rounded-circle mb-3"
                                    width="80"
                                    height="80"
                                />
                                <h5 className="card-title">{t.name}</h5>
                                <h6 className="text-muted">{t.title}</h6>
                                <p className="card-text mt-3">"{t.quote}"</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
