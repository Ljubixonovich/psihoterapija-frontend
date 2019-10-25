import React from 'react';
import styled from 'styled-components';
// import {Colors} from '../../../utils/constants';

const Wrapper = styled.div`
   background-color: red;
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
      <div className='InnerWrapper'>
      <h1>Footer</h1>
      </div>
   </Wrapper>
)