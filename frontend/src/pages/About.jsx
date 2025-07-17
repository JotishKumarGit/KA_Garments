import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img_1 from '../assets/yoga-short.webp';


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      {/* Title Section */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold">About Us</h2>
        <p className="text-muted">Discover our story, mission, and the passion behind everything we do.</p>
      </div>

      {/* Content Section */}
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 mb-4" data-aos="fade-right">
          <img src={img_1} alt="About us" className="img-fluid rounded shadow" />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-6" data-aos="fade-left">
          <h4 className="mb-3">Who We Are</h4>
          <p>
            We are a team of dedicated professionals committed to creating meaningful digital experiences.
            Our focus is on innovation, collaboration, and delivering top-notch solutions that empower our clients.
          </p>
          <p>
            From web development to product strategy, we work closely with our partners to turn ideas into impactful results.
          </p>
          <button className="btn btn-primary mt-3">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
