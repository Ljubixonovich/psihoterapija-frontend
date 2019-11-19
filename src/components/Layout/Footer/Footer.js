import React from 'react';
import styled from 'styled-components';
import image from '../../../assets/images/boje_u_sivom.jpg';

const Wrapper = styled.div`
   background-image: url(${image});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center; 
   grid-area: f;
   display: grid;
   grid-template-columns: repeat(12, 1fr);

   .InnerWrapper {
      grid-area: f;
      padding: 0px 16px;
   }

   grid-template-areas: 
      'f f f f f f f f f f f f'
   ; 

   @media (min-width: 992px) {
      grid-template-areas: 
      '. f f f f f f f f f f .'
      ;
   }

   @media (min-width: 1600px) {
      grid-template-areas: 
      '. . f f f f f f f f . .'
      ;
   }
`;



export const Footer = (props) => (
   <Wrapper>
      <div className='InnerWrapper'></div>
   </Wrapper>
)