import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { LanguageContext } from '../../contexts/LanguageContext';
import { Heading } from '../../components/Heading/Heading';

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

export const Logo = (props) => {
   const { translations:trans } = useContext(LanguageContext).translations;
   return (
      <Wrapper>
         <NavLink to='/' >
            <Heading noTextAlign className='Capitalize'>{trans.psychotherapy}</Heading>
            <Space width='16px' />
            <Heading>{trans.jasna}</Heading>
         </NavLink>
      </Wrapper>
   );
}