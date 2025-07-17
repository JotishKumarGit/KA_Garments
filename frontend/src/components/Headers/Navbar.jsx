
import React from 'react';
import './Navcss.css';

const Navbar = () => {
    return (
        <>
            {/* Upper Navbar */}
            <div className="upper-navbar d-flex justify-content-between align-items-center px-4 py-2">
                <div className="text-light">
                    📞 support@example.com
                </div>
                <div className="text-light">
                    🌐 EN | 🔗 Login
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg main-navbar px-4 py-3">
                <div className="container-fluid">
                    <a className="navbar-brand logo-text" href="#">
                        <strong>SHREE KA GARMENTS</strong>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
                        <ul className="navbar-nav mb-2 mb-lg-0 nav-links">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">Produts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
