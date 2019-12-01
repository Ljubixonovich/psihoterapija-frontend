import React, { useEffect, useContext } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import { awakeBackend } from '../../utils/api';

const Home = (props) => {
   const {translations: trans } = useContext(LanguageContext).translations;
   useEffect(() => {
      awakeBackend()});

   return (
      <>
         <h1 className='Capitalize'>{trans.psychotherapy} {trans.jasna}</h1>
         <h1>{trans.home} {trans.page}</h1>
      </>
   );
}

export default Home;