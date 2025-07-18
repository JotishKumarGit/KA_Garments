import React, { useState } from 'react';
import './Homepage.css';
import pro_1 from '../assets/ankle-leggins.jpg';
import pro_2 from '../assets/cycling_short.jpg';
import pro_3 from '../assets/lycra-churithr-leggings.jpg';
import pro_4 from '../assets/yoga-short.webp';
import { Modal, Button } from 'react-bootstrap';


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

  // This is for modal 
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowDetailsModal(true);
  };

  const handleShowEnquiry = (product) => {
    setSelectedProduct(product);
    setShowEnquiryModal(true);
  };

  const handleCloseDetails = () => setShowDetailsModal(false);
  const handleCloseEnquiry = () => setShowEnquiryModal(false);


  // // for send data on whatsapp
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const phone = '+919790097379';
    const text = `Product: ${selectedProduct?.title}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const WaLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(WaLink, "_blank");
    console.log("data is passed to WhatsApp");
  };


  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">Featured Products</h2>
          <p className="text-muted para-p">
            At SHREE KA GARMENTS, we specialize in high-quality leggings that cater to various customer needs, trends, and lifestyles. Whether you're a retailer, distributor, or brand owner, we offer a diverse selection of leggings that combine style, comfort, and functionality.
          </p>
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
                    <button className="btn btn-outline-primary px-4" onClick={() => handleShowDetails(item)}>Details</button>
                    <button className="btn btn-outline-success px-4" onClick={() => handleShowEnquiry(item)}>Enquiry</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* This is product details modal */}
      <div className="container mt-5 text-center">
        <Modal show={showDetailsModal} onHide={handleCloseDetails} size="lg" centered>
          {/* Modal Header */}
          {selectedProduct && (
            <div className="px-4 pt-4 pb-2 border-bottom text-center">
              <h2 className="fw-bold text-primary">{selectedProduct.title}</h2>
              <p className="text-muted mb-0">{selectedProduct.details}</p>
            </div>
          )}

          {/* This modal is for details */}
          <Modal.Body>
            {selectedProduct && (
              <div className="d-flex flex-column flex-md-row align-items-center">
                {/* Image */}
                <div className="text-center mb-3 mb-md-0" style={{ flex: 1 }}>
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="img-fluid rounded shadow-sm" style={{ maxHeight: '250px', objectFit: 'cover' }} />
                </div>

                {/* Product Info */}
                <div style={{ flex: 1, paddingLeft: '20px' }}>
                  <h5 className="fw-semibold">{selectedProduct.title}</h5>
                  <p className="text-secondary">{selectedProduct.details}</p>
                  <Button variant="success" className="mt-3 px-4" onClick={() => handleShowEnquiry(selectedProduct)}>Enquire Now</Button>

                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDetails}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/* This Modal is for Enquery form */}
        <Modal show={showEnquiryModal} onHide={handleCloseEnquiry} size="lg" centered>
          <Modal.Body className="p-4">
            <h4 className="text-center mb-4 text-primary fw-bold">Send Us Your Enquiry</h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control" id="message" rows="4" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              <div className="text-center">
                <Button variant="success" type='submit'>
                  Send via WhatsApp
                </Button>
              </div>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEnquiry}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Product;




