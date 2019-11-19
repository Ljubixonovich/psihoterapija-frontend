import React, { useContext } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
const Dictionary = (props) => {
   const {translations: trans } = useContext(LanguageContext).translations;
   return (
      <>
      <h1>{trans.keyTerms}</h1>
      </>
   );
};

export default Dictionary;