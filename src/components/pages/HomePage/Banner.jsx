import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  width: '100%';
  marg
`;

const ContainerImage = styled.img`
  min-width: 1680;
  height: 280;
  width: '100%';
  margin: auto;
`;

const Banner = () => {
  return (
    <ContainerDiv>
      <ContainerImage
        src="https://rukminim1.flixcart.com/flap/844/140/image/4384964ad13fcf65.jpg?q=50"
        alt=""
      />
    </ContainerDiv>
  );
};

export default Banner;
