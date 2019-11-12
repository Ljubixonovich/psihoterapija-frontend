import React from 'react';
import { NavLink } from 'react-router-dom';

import { Btn } from '../../components/Btn/Btn';

const Help = (props) => {

   return (
      <>
      <h1>Kako vam mogu pomoci</h1>
      <NavLink
         to={{
            pathname:'contact',
            aboutProps: {
               hideContactInfo: true
            }
         }}
      > 
         <Btn className='Center'>Zakazi susret</Btn>
      </NavLink>
      </>
   );
};

export default Help;