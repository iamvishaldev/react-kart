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
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    // await setLoading(true);
    commerce.products
      .list()
      .then(async (productsResult) => {
        await setLoading(false);
        console.log(productsResult.data);

        const productsData = productsResult.data.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price.formatted_with_symbol,
          imageUrl: product.media.source,
        }));

        setProducts(productsData);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  console.log('loading', loading);
  useEffect(fetchData, []);
  if (loading) return <h4>loading...</h4>;
  if (!loading)
    return (
      <StyledProductList>
        {products.length &&
          products.map((product) => (
            <Product
              loading={loading}
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
