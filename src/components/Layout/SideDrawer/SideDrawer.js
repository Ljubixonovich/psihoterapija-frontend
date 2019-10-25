import React from 'react';
import styled from 'styled-components';

import { Header } from '../Header/Header';
import { Backdrop } from '../../Backdrop/Backdrop';
import { Btn } from '../../Btn/Btn';
import './SideDrawer.css';

const ModalWrapper = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
   bottom: 0;
   overflow: auto;
   z-index: 200;
   background-color: white;
   box-sizing: border-box;
   transition: transform 0.3s ease-out;    
   @media (min-width: 992px) {
      display: none;
   }
`;

const GridWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: 64px auto;
   grid-template-areas: 
      'h h h h h h h h h h h h'
      'p p p p p p p p p p p p'
   ;

   .Nav {
      grid-area: p;
      padding: 16px 8px;
   }
`;


export const SideDrawer = (props) => {
   const drawerClasses = props.sideDrawerIsOpen ?
      "SideDrawerOpen" : "SideDrawerClose";

   return (
      <>
         <Backdrop
            show={props.sideDrawerIsOpen}
            onClick={props.onCloseDrawer}
         />
         <ModalWrapper className={drawerClasses}>
            <GridWrapper>
               <Header
                  isModal
                  onCloseDrawer={props.onCloseDrawer}
               />

               <div className='Nav'>
                  {/* <NavigationItems /> */}
                  <p>asd</p>
                  <p>asd</p>
                  <p>asd</p>

                  <Btn>Zakazi</Btn>
               </div>
            </GridWrapper>
         </ModalWrapper>
      </>
   );

}
