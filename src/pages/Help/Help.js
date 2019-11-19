import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { LanguageContext } from '../../contexts/LanguageContext';
import { Btn } from '../../components/Btn/Btn';

const Help = (props) => {
   const {translations: trans} = useContext(LanguageContext).translations;
   return (
      <>
      <h1>{trans.howCanIHelpYou}</h1>
      <NavLink
         to={{
            pathname:'contact',
            aboutProps: {
               hideContactInfo: true
            }
         }}
      > 
         <Btn className='Center'>{trans.scheduleTherapy}</Btn>
      </NavLink>
      </>
   );
};

export default Help;