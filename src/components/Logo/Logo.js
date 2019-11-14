import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Heading } from '../../components/Heading/Heading';
import { localize } from '../../utils/translations';

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
         <Heading noTextAlign className='Capitalize'>{localize('psychotherapy')}</Heading> 
         <Space width='16px' />
         <Heading>{localize('jasna')}</Heading>
      </NavLink>
   </Wrapper>
)