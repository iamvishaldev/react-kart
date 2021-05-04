import React from 'react';
import styled from 'styled-components';

// const li = styled.li`
//   colorl: 'white';
// `;

const NavItem = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 30,
        outline: '#000000 solid 2px',
      }}
    >
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          listStyleType: 'none',
          margin: 0,
          padding: 5,
          backgroundColor: '#2874f0',
        }}
      >
        <li>Grocery</li>
        <li>Mobiles</li>
        <li>Fashions</li>
        <li>Electronics</li>
        <li>Home</li>
      </ul>
    </div>
  );
};

export default NavItem;
