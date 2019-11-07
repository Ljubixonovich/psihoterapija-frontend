import React, { useEffect } from 'react';

import { PersonalData } from '../../utils/constants';
import { awakeBackend } from '../../utils/api';

const Home = (props) => {

   useEffect(() => {
      awakeBackend()});

   return (
      <>
         <h1>Psihoterapija {PersonalData.name}</h1>
         <h1>Home Page</h1>
      </>
   );
}

export default Home;