import React, { useContext } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import { PersonalData } from '../../utils/constants';

export const ContactInfo = (props) => {
   const {translations: trans } = useContext(LanguageContext).translations;
   return (
      <>
         <h1>{trans.contact} Info</h1>
         <label>mobile/viber: </label>
         <span>{PersonalData.phone}</span>
         <br />

         <label>e-mail: </label>
         <span>{PersonalData.email}</span>
         <br />
         <hr />
      </>
   );
}
