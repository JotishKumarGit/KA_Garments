import React from "react";
import Service from "../Service";

const Services = () => {


  return (
    <>
      <div className="container-fluid p-0">
        <section className="about-us-section">
          <div className="about-us-overlay">
            <h2 className="text-center justify-content-center ">Our Services </h2>
            <p className="para-p text-center">
              Driven by a deep passion for innovation and unwavering commitment to excellence, our services are crafted to provide meaningful solutions that empower individuals and businesses alike. Leveraging cutting-edge technology and expert knowledge, we simplify complex challenges and open doors to new opportunities.
            </p>
          </div>
        </section>

        <div className="container pt-5">
          <Service />
        </div>
      </div>
    </>
  );
};

export default Services;




