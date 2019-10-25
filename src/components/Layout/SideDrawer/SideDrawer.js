import React from 'react';
import styled from 'styled-components';
import { Backdrop } from '../../Backdrop/Backdrop';
import { Btn } from '../../Btn/Btn';
import { Header } from '../Header/Header';
import './SideDrawer.css'

const SideDrawerComponent = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
   bottom: 0;
   overflow: auto;
   z-index: 200;
   background-color: white;
   padding: 16px 16px;
   box-sizing: border-box;
   transition: transform 0.3s ease-out;    

   @media (min-width: 992px) {
      display: none;
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

         <SideDrawerComponent
            className={drawerClasses}
         >
            <Header
               isModal
               onCloseDrawer={props.onCloseDrawer}
            />
            <div style={{marginTop: 100}}>
            {/* <NavigationItems /> */}
               <Btn>Zakazi</Btn>
            </div>
         
         </SideDrawerComponent>
      </>
   );
};
