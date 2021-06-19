import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import Product from './Product';
import ProductList from './ProductList';
import Footer from './Footer';
import Caurosel from './Caurosel';
// import Banner from './Banner';

const index = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      {/* <Banner /> */}
      <Caurosel />
      <ProductList />
    </div>
  );
};

export default index;
