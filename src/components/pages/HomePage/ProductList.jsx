import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { fetchProducts } from '../../../Reactkart.service'
import { Reducer, initailState, Action, fetchTypes } from '../../../reducer/reducer';
import Product from '../HomePage/Product';
import Commerce  from '../../../lib/commerce.js';



const StyledProductList = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 100px;
`;

const ProductList = () => {

  const [state, dispatch] = useReducer(Reducer, initailState)

  const fetchData = async  () => {
    dispatch({ type: Action.pending })
    try {
      const products = await Commerce.products.list()
      const productsData = products.data.map((singleProduct) => (
        {
            id: singleProduct.id,
            name: singleProduct.name,
            price: singleProduct.price.formatted_with_symbol,
            imageUrl: singleProduct.media.source
        }
    ))
      console.log("ProductList products",productsData)
        dispatch({ type: Action.resolved,Products:productsData })
    } catch (error) {
      dispatch({ type: Action.rejected})
    }
  //  const products = fetchProducts()
  //   if(products === null){
  //       dispatch({ type: Action.rejected})
  //   }
  //   else{
  //     dispatch({ type: Action.resolved,Products:products })
  //     console.log("else data",products)
  //   }
  }

  useEffect(()=>{
    fetchData()
  }, []);


      
  if (state.fetching === fetchTypes.STATE_FETCHING) {
    return <h1>Loading</h1>
  }
  if (state.fetching === fetchTypes.STATE_FAILURE) {
    return <h1>{state.error}</h1>
  }



  return (
    <StyledProductList>
      {
        state.products && state.products.length !== 0 && state.products.map((product) => (
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
