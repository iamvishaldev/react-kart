import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import commerce from '../../../lib/commerce';
import Product from '../HomePage/Product';

const StyledProductList = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 100px;
`;

const ProductList = () => {
  const [products, setProducts] = React.useState([]);

  // Fetching Products
  const fetchData = async () => {
    commerce.products
      .list()
      .then(async (productsResult) => {
        console.log(productsResult.data);

        const productsData = productsResult.data.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price.formatted_with_symbol,
          imageUrl: product.media.source,
        }));

        setProducts(productsData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(fetchData, []);
  return (
    <StyledProductList>
      {products.length !== 0 &&
        products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
    </StyledProductList>
  );
};

export default ProductList;
