import React from 'react';
import styled from 'styled-components';

import { NavItems } from '../NavItems/NavItems';
import { Logo } from '../../Logo/Logo';
import { DrawerToggle } from '../SideDrawer/DrawerToggle/DrawerToggle';
import { CloseBtn } from '../SideDrawer/CloseBtn/CloseBtn';
import image from '../../../assets/images/boje_u_sivom.jpg';

const Wrapper = styled.div`
   background-image: url(${image});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;   
   height: 64px;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;   
   box-sizing: border-box;
   z-index: 90;
   grid-area: h;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   grid-template-areas: 
      'h h h h h h h h h h h h'
   ; 

   /* @media (min-width: 992px) {
      grid-template-areas: 
      '. h h h h h h h h h h h'
      ;
   } */

   @media (min-width: 1200px) {
      grid-template-areas: 
      '. h h h h h h h h h h .'
      ;
   }

   @media (min-width: 1600px) {
      grid-template-areas: 
      '. . h h h h h h h h . .'
      ;
   }

   .Nav {
      display: none;

      @media (min-width: 992px) {
         display: flex;

         p {
            margin: 0 10px;
         }
      }
   }
`;

const HeaderWrapper = styled.div`    
   grid-area: h; 
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 0px 16px;
`;

export const Header = (props) => (
   <Wrapper>
      <HeaderWrapper>
         <Logo />

         <div>
            <div className='Nav'>
               <NavItems />
            </div>

            {props.isModal ?
               <CloseBtn onClick={props.onCloseDrawer} /> :
               <DrawerToggle
                  onClick={props.drawerToggleClicked}
               />
            }
         </div>

      </HeaderWrapper>
   </Wrapper>
)