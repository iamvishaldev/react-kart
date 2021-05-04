import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import ProductList from './ProductList';
import Footer from './Footer';
import { Carousel } from 'react-responsive-carousel';
import Banner from './Banner';

const index = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Banner />
    </div>
  );
};

export default index;
