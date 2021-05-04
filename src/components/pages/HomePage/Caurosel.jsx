import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const img = styled.img`
    width:"100%",
    height:"50%"
`;

const Caurosel = () => {
  return (
    <Carousel autoPlay="true">
      <div>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/HomeEss_1500x600_V3._CB670265509_.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Food-Health_DesktopTallhero_1500x600._CB655091385_.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/BISS_GW_Hero/Feb_21/PC_Hero_1500x600-._CB658822030_.jpg"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default Caurosel;
