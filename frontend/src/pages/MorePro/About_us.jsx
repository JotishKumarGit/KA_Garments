import React from "react";
import About from "../About";

const About_us = () => {




  return (
    <>
      <div className="container-fluid p-0">
        <section className="about-us-section">
          <div className="about-us-overlay">
            <h2 className="text-center justify-content-center ">About Us </h2>
            <p className="para-p text-center">At the heart of our company lies a deep passion for innovation and a commitment to excellence. Since our inception, we have dedicated ourselves to creating meaningful solutions that empower individuals and businesses alike.</p>
          </div>
        </section>

        <div className="container pt-5">
          <About />
        </div>
        <div className="container my-5">
          <h1 className="text-center mb-5">Our Mission & Vision</h1>
          <div className="row gy-4">
            {/* Mission Section */}
            <div className="col-md-6">
              <div className="p-4 border rounded shadow-sm h-100 bg-light">
                <h2 className="mb-3 text-primary">Our Mission</h2>
                <p>Our mission is to deliver innovative solutions that empower individuals andbusinesses to thrive in a rapidly changing world. We are committed toexcellence, integrity, and sustainability in everything we do. Throughcollaboration and passion, we strive to exceed expectations and foster apositive impact on our community and environment.</p>
                <ul>
                  <li>Innovate continuously with cutting-edge technology</li>
                  <li>Prioritize customer satisfaction and trust</li>
                  <li>Promote sustainable and responsible business practices</li>
                  <li>Encourage teamwork and inclusive culture</li>
                </ul>
              </div>
            </div>

            {/* Vision Section */}
            <div className="col-md-6">
              <div className="p-4 border rounded shadow-sm h-100 bg-white">
                <h2 className="mb-3 text-success">Our Vision</h2>
                <p>Our vision is to be a global leader recognized for transforming challengesinto opportunities, inspiring innovation, and driving growth for our clientsand partners. We envision a future where technology and human potentialunite to create meaningful experiences and sustainable progress worldwide.</p>
                <ul>
                  <li>Lead the industry with pioneering ideas</li>
                  <li>Expand global reach while maintaining local impact</li>
                  <li>Empower communities through education and engagement</li>
                  <li>Build a legacy of integrity and excellence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default About_us;




