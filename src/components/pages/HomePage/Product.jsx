import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProductList from './ProductList';

const Product = () => {
  return (
    <Container>
      <Grid container spacing={3} justify="center">
        <Grid item lg={4}>
          <ProductList />
        </Grid>
        <Grid item lg={4}>
          <ProductList />
        </Grid>
        <Grid item lg={4}>
          <ProductList />
        </Grid>
        <Grid item lg={4}>
          <ProductList />
        </Grid>
        <Grid item lg={4}>
          <ProductList />
        </Grid>
        <Grid item lg={4}>
          <ProductList />
        </Grid>
        <Grid item lg={4}>
          <ProductList />
        </Grid>
        <Grid item lg={4}>
          <ProductList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
