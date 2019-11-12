import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../utils/constants';

const Wrapper = styled.div` 
   cursor: pointer;  
   width: 32px;
   height: 100%;
   min-height: 44px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   padding: 10px 0;
   box-sizing: border-box;

   div {
      width: 90%;
      height: 2px;
      background-color: black;
   }

   :hover {
      div {
         background-color: ${Colors.teal};
      }
   }

   @media (min-width: 992px) {
      display: none;
   }
`;

export const DrawerToggle = (props) => (
   <div className='Inline'>
      <Wrapper onClick={props.onClick}>
         <div></div>
         <div></div>
         <div></div>
      </Wrapper>
   </div>
)