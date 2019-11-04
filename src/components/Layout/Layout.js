import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from './Header/Header';
import { SideDrawer } from './SideDrawer/SideDrawer';
import { Footer } from './Footer/Footer';

const LayoutWrapper = styled.div`
   min-height: 100%;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: 64px auto 100px;
   grid-template-areas: 
      'h h h h h h h h h h h h'
      'p p p p p p p p p p p p'
      'f f f f f f f f f f f f'
   ;

   @media (min-width: 992px) {
      grid-template-areas: 
      'h h h h h h h h h h h h'
      '. p p p p p p p p p p .'
      'f f f f f f f f f f f f'
      ;
   }

   @media (min-width: 1600px) {
      grid-template-areas: 
      'h h h h h h h h h h h h'
      '. . p p p p p p p p . .'
      'f f f f f f f f f f f f'
      ;
   }
`;

const PageContainer = styled.div`
   grid-area: p;
   padding: 0px 10px;
`;


const Layout = (props) => {
   const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

   const sideDrawerToggleHandler = () => {
      setSideDrawerVisible(!sideDrawerVisible)
   }

   const sideDrawerClosedHandler = () => {
      setSideDrawerVisible(false)
   }

   return (
      <>
         <LayoutWrapper>
            <Header
               drawerToggleClicked={sideDrawerToggleHandler}
            />

            <PageContainer>
               <main>{props.children}</main>
            </PageContainer>

            <Footer />
         </LayoutWrapper>

         <SideDrawer
            onCloseDrawer={sideDrawerClosedHandler}
            sideDrawerIsOpen={sideDrawerVisible}
         />
      </>
   );

}

export default Layout;