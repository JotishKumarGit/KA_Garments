import React from "react";
import Contact from "../Contact";


const Contacts = () => {


  return (
    <>
      <div className="container-fluid p-0">
        <section className="about-us-section">
          <div className="about-us-overlay">
            <h2 className="text-center justify-content-center ">Contact Us </h2>
            <p className="para-p text-center">We’re here to listen, help, and collaborate. Whether you have questions, feedback, or want to explore how we can work together, don’t hesitate to reach out. Our dedicated team is committed to providing timely support and personalized solutions to meet your needs. Let’s connect and create something great together!</p>
          </div>
        </section>
        <div className="container pt-5">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Contacts;




