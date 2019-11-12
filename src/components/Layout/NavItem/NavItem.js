import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Colors } from '../../../utils/constants';

const Li = styled.li`
   margin: 14px 0;
   box-sizing: border-box;
   display: block;
   width: 100%;
   font-size: 24px;
   
   a {
      color: ${Colors.teal};
      text-decoration-color: transparent;   
      width: 100%;
      box-sizing: border-box;
      display: block;
   }

   a:hover,
   a:active,
   a.active {
      font-weight: 700;
   }


   @media (min-width: 992px) {
      margin: 0;
      display: flex;
      align-items: center;
      height: 100%;
      width: auto;
      
      a {
         height: 100%;
         padding: 16px 10px;
         border-bottom: 4px solid transparent;         
      }
   
      a:hover,
      a:active,
      a.active {
         font-weight: 700;
      }      
   }
`;

export const NavItem = (props) => (
   <Li onClick={props.onClick}>
      <NavLink
         to={props.link} 
         exact={props.exact}
      >         
         {props.children} 
      </NavLink>
   </Li>
);
