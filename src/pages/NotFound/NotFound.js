import React from 'react';
import { NavLink } from 'react-router-dom';

import { Btn } from '../../components/Btn/Btn';

const NotFound = (props) => (
   <>
      <h3 className='Center'>Page Not Found</h3>
      <p className='Center'>Niste našli ono što tražite? Postavite pitanje za specijalno vašu situaciju</p>
      <NavLink
         to={{
            pathname: 'contact',
            aboutProps: {
               hideContactInfo: true
            }
         }}
      >
         <Btn className='Center'>Pitaj</Btn>
      </NavLink>
   </>
);

export default NotFound;