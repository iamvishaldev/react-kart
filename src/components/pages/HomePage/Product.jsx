import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { YoutubeSearchedFor } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    boxShadow: '0px 6px 8px 10px #cce',
    transition: 'all .2s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.07)',
    },
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
}));

export default function Product(props) {
  //   {
  //   name = 'Iphone 12',
  //   price = '84000',
  //   imageUrl = 'https://m.media-amazon.com/images/I/71hVxI-Ed-S._SL1500_.jpg',
  // }
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log('props', props);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={<IconButton aria-label="settings"></IconButton>}
        title={name}
        subheader="Yours Products"
      />
      <CardMedia className={classes.media} image={imageUrl} title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          4.5/5
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="shoppingcarticon" style={{ marginLeft: 170 }}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
