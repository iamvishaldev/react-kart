import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import CarouselSlider from 'react-carousel-slider';

// const CauroselImage = styled.img`
//   width: '100%';
//   height: '50%';
// `;

// const ContainerDiv = styled.div``;

let data = [
  {
    des: '1',
    imgSrc:
      'https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB654576486_.png',
  },
  {
    des: '2',
    imgSrc:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/BISS_GW_Hero/Feb_21/PC_Hero_1500x600-._CB658822030_.jpg',
  },
  {
    des: '3',
    imgSrc:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_5._CB657961025_.jpg',
  },
];

const Caurosel = () => {
  let manner = {
    autoSliding: { interval: '3s' },
    duration: '2s',
  };

  let accEleSetting;

  let mobileRegx = /Mobi|Tablet|iPad|iPhone/;
  if (mobileRegx.test(navigator.userAgent)) {
    accEleSetting.button = false;
  }

  let buttonSetting = {
    placeOn: 'middle-inside',
    hoverEvent: true,
    style: {
      left: {
        height: '50px',
        width: '50px',
        color: '#929393',
        background: 'rgba(225, 228, 232, 0.8)',
        borderRadius: '50%',
      },
      right: {
        height: '50px',
        width: '50px',
        color: '#929393',
        background: 'rgba(225, 228, 232, 0.8)',
        borderRadius: '50%',
      },
    },
  };
  return (
    <CarouselSlider
      slideItems={data}
      manner={manner}
      buttonSetting={buttonSetting}
    />
  );
};

export default Caurosel;
