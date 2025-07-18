import React from 'react';
import './Navcss.css';

const Footer = () => {
  return (
    <footer className="custom-footer bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row justify-content-between">

          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 className="text-uppercase mb-3">Shree KA Garments</h4>
            <p>Your trusted partner in high-quality fashion exports. Designed for elegance, built for comfort.</p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Explore</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Our Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i>support@shreekagarments.com</p>
            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>+91 9790097379</p>
            <p><i className="bi bi-geo-alt-fill me-2"></i>193F ST-2 , UTHUKULI ROAD , NEAR REGISTER OFFICE , KUNNATHUR ,TAMIL NADU , INDIA</p>

            {/* Social Icons */}
            <div className="social-icons mt-3">
              <a href="#" title="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" title="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" title="YouTube"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center">
          <small>&copy; {new Date().getFullYear()} Shree KA Garments. All rights reserved.</small>
        </div>
        <div className="text-center">
          <small>&copy; {new Date().getFullYear()} Designed By <a href="https://trade4export.com/">Trader4Export</a></small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
