import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../utils/constants';

const StyledButton = styled.button`
    color: ${Colors.white};
    border: none;
    border-radius: 44px;
    background-color: ${Colors.teal}; 
    height: 36px;
    min-width: 135px;
    transition: background-color 0.3s linear;
    
    span {
         text-align: center;
         font-weight: 700;
         font-size: 12px;
         text-transform: ${props => props.uppercase ? "uppercase" : "none"};
    }

    &:hover {
      background-color: ${Colors.white};
      border: 1.25px solid ${Colors.teal};
      color: ${Colors.teal};
      cursor: pointer;
    }
`;

export const Btn = (props) => (
   <div className={props.className}>
      <StyledButton 
         uppercase={props.uppercase} 
         onClick={props.onClick}
      >
         <span>
            {props.children}
         </span>
      </StyledButton>
   </div>
)
