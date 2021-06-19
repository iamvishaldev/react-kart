import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  image: {
    backgroundImage:
      'url(https://rukminim1.flixcart.com/flap/844/140/image/4384964ad13fcf65.jpg?q=50)',
    width: '100%',
    height: 100,
  },
}));

const CategoryText = styled.div`
  font-size: 5px;
  flexdirection: 'column';
  margintop: 50;
`;

const CategoryImage = styled.div`
  transition: 'all .2s ease-in-out';
  cursor: 'pointer';

  '&:hover': {
    transform: 'scale(1.07)';
  }
`;

const catergories = [
  {
    name: 'Mobile',
    src:
      'https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/521352b2-9c3e-4d2e-bf79-71165ed41a3b.png?q=90',
  },
  {
    name: 'Electronics',
    src:
      'https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/55e3d7c3-9564-4ec6-8024-02c6b2fe65ed.png?q=90',
  },
  {
    name: 'Fashion',
    src:
      'https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/880e0970-97a8-4159-9c4f-e22e4d1a76ab.png?q=90',
  },
  {
    name: 'Tvs & Appliances',
    src:
      'https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/c2be6deb-e44c-4ced-8eae-b04bf56b30c7.png?q=90',
  },
  {
    name: 'Beauty,Toys & More',
    src:
      'https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/f788de21-4913-4130-a684-baaa7d68ae8d.png?q=90',
  },
  {
    name: 'Home & Furniture',
    src:
      'https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/ead59bd1-a070-4ba6-b6c2-de5f4f8f0824.png?q=90',
  },
  {
    name: 'Flights',
    src:
      'https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/60de4f56-8c3b-4323-93d0-7478bd6ca9d8.png?q=90',
  },
];

const Categories = () => {
  const classes = useStyles();

  const categoreisStyle = {
    width: '100%',
    height: 100,
    marginTop: 7,
    marginBottom: 10,
    backgroundColor: '#2874f0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    boderRadius: 15,
  };

  return (
    <div className={classes.root}>
      <Box style={categoreisStyle} boxShadow={3}>
        <div>Shop</div>
        {/* <img src={require('../../../images/sale.png')} alt="" /> */}
        {catergories.map((category, index) => (
          <CategoryImage key={category.id}>
            <Avatar src={category.src} className={classes.large} />
            <p>{category.name}</p>
          </CategoryImage>
        ))}
      </Box>
    </div>
  );
};

export default Categories;
