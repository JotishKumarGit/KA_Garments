import React from 'react'
import Slider from '../components/Slider/Slider';
import Card from './Card';
import About from './About';
import Product from './Product';
import Service from './Service';
import Testimonial from './Testimonial';

function Home() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <Slider />
        <div className="container">
          <Card />
          <About />
          <Product />
          <Service />
          <Testimonial />
        </div>
      </div>
    </>
  )
}

export default Home;


