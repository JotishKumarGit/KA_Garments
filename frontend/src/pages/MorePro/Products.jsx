import React from "react";
import Product from "../Product";


const Products = () => {


  return (
    <>
      <div className="container-fluid p-0">
        <section className="about-us-section">
          <div className="about-us-overlay">
            <h2 className="text-center justify-content-center ">Our Products </h2>
            <p className="para-p text-center">
              Born from a deep passion for innovation and a commitment to excellence, our product is designed to deliver meaningful solutions that empower both individuals and businesses. Crafted with precision and driven by cutting-edge technology, it aims to simplify your challenges and unlock new opportunities. Experience reliability, performance, and innovation all in one package—built to help you succeed today and tomorrow.
            </p>
          </div>
        </section>
        <div className="container pt-5">
          <Product />
        </div>
      </div>
    </>
  );
};

export default Products;




