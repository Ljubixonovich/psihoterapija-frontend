import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { SET_ENGLISH_LANGUAGE_SAGA, SET_SERBIAN_LANGUAGE_SAGA } from '../../../store/actions';
import SerbianFlag from '../../../assets/images/rs.png';
import EnglishFlag from '../../../assets/images/uk.png';


const ImageHolder = styled.div`
   width: 22px;
   height: 14px;
   background-image: url(${props => props.language === 'en' ? SerbianFlag : EnglishFlag});
   background-size: cover;
   margin: 0 8px;

   :hover {
      cursor: pointer;
   }
`;

const LanguagePicker = (props) => {
   const language = useSelector(state => state.language.language);
   const dispatch = useDispatch();

   const setLanguage = () => {
      language === 'sr' ?
         dispatch({type: SET_ENGLISH_LANGUAGE_SAGA}) :
         dispatch({type: SET_SERBIAN_LANGUAGE_SAGA});
   }

   return (
      <ImageHolder onClick={setLanguage} language={language} />
   );
};

export default LanguagePicker;
