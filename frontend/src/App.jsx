import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Headers/Navbar';
import Footer from './components/Headers/Footer';
import About_us from './pages/MorePro/About_us';
import Services from './pages/MorePro/Services';
import Contacts from './pages/MorePro/Contacts';
import Products from './pages/MorePro/Products';


function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About_us />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

