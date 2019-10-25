import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from './Header/Header';
import { SideDrawer } from './SideDrawer/SideDrawer';
import { Footer } from './Footer/Footer';

const LaoyoutWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: 100px auto 100px;
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
   padding: 0px 16px;
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
      <LaoyoutWrapper>
         <Header            
            drawerToggleClicked={sideDrawerToggleHandler}
         />

         <PageContainer>
            <main>{props.children}</main>
         </PageContainer>

         <Footer />

         <SideDrawer
            onCloseDrawer={sideDrawerClosedHandler}
            sideDrawerIsOpen={sideDrawerVisible}
         />
      </LaoyoutWrapper>
   );

}

export default Layout;