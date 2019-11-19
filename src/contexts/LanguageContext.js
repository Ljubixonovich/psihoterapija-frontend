import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { translations } from '../utils/Languages';

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
   const language = useSelector(state => state.language.language);
   const responseTranslations =
      language === 'en' ?
         translations.en :
         translations.sr;
   return (
      <LanguageContext.Provider value={{ translations: responseTranslations }}>
         {props.children}
      </LanguageContext.Provider>
   );
}

export default LanguageContextProvider;