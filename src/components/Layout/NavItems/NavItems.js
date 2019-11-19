import React, { useContext } from 'react';
import styled from 'styled-components';

import { LanguageContext } from '../../../contexts/LanguageContext';
import { NavItem } from '../NavItem/NavItem';
import { Links } from '../../../utils/constants';

const Ul = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   height: 100%;   

   @media (min-width: 992px) {
      flex-direction: row;
   }
`;

export const NavItems = (props) => {
   const { translations: trans } = useContext(LanguageContext).translations;
   return (
      <Ul>
         {Links.map((l, index) =>
            <NavItem
               onClick={props.onClick}
               key={index}
               link={`/${l.link}`}
               exact={l.link === '' ? true : false}
            >
               {trans[l.title]}
            </NavItem>
         )}
      </Ul>
   );
}
