import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../utils/constants';

const StyledBtn = styled.div` 
   cursor: pointer;
   display: inline;

   :hover {
      span {
         background-color: ${Colors.teal};
      }
   }

   span {
      display: block;
      position: relative;
      transition: all .25s;
      margin-top: 4px;
      width: 26px;
      height: 2px;
      background: black;
   }

   & span:nth-child(1) {
      transform: rotate(45deg) translate(4.4px,4.4px);
   }

   & span:nth-child(2) {
      width: 0;
   }

   & span:nth-child(3) {
      transform: rotate(-45deg) translate(4.4px,-4.4px);
   }
`;

export const CloseBtn = ({onClick}) => {  
    return (
        <StyledBtn onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </StyledBtn>
    )
 };
 