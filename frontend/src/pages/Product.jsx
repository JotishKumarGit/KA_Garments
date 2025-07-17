import React from 'react';
import './Homepage.css';
import pro_1 from '../assets/ankle-leggins.jpg';
import pro_2 from '../assets/cycling_short.jpg';
import pro_3 from '../assets/lycra-churithr-leggings.jpg';
import pro_4 from '../assets/yoga-short.webp';

const Product = () => {

  const productList = [
    {
      image: pro_1,
      title: 'Ankle Leggins',
      details: 'This is a detailed description of product 1.',
    },
    {
      image: pro_2,
      title: 'Cycling Short',
      details: 'This is a detailed description of product 2.',
    },
    {
      image: pro_3,
      title: 'Lycra Churithr Leggings',
      details: 'This is a detailed description of product 3.',
    },
    {
      image: pro_4,
      title: 'Yoga Short',
      details: 'This is a detailed description of product 3.',
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold">Featured Products</h2>
        <p className="text-muted">Discover our story, mission, and the passion behind everything we do.</p>
      </div>
      <div className="row justify-content-center">
        {productList.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card product-card shadow-sm h-100">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text flex-grow-1">{item.details}</p>

                {/* Button group with spacing */}
                <div className="mt-auto d-flex justify-content-center gap-3">
                  <button className="btn btn-outline-primary px-4">Details</button>
                  <button className="btn btn-outline-success px-4">Enquiry</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;



