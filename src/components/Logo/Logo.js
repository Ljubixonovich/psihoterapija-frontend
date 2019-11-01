import React from 'react';
import { NavLink } from 'react-router-dom';

import { Heading } from '../../components/Heading/Heading';
import styled from 'styled-components';

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;

   @media (min-width: 992px) {
      flex-direction: row;
   }
`;

const Space = styled.span`
   width: ${props => props.width || '5px'};
`;

export const Logo = (props) => (
   <Wrapper>
       <NavLink to='/' >  
         <Heading noTextAlign>Psihoterapija</Heading> 
         <Space width='16px' />
         <Heading noTextAlign italic>Jasna Amroš-Vukelić</Heading>
      </NavLink>
   </Wrapper>
)