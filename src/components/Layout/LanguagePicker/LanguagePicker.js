import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { SET_ENGLISH_LANGUAGE, SET_SERBIAN_LANGUAGE } from '../../../store/actions';
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
   const setLanguage = () => {
      props.language === 'sr' ?
         props.setEnglishLanguage() :
         props.setSerbianLanguage();
   }

   return (
      <ImageHolder onClick={setLanguage} language={props.language} />
   );
};

const mapStateToProps = (state) => {
   return {
      language: state.language.language
   };
};

const mapDispatchToProps = dispatch => {
   return {
      setSerbianLanguage: () => dispatch({ type: SET_SERBIAN_LANGUAGE }),
      setEnglishLanguage: () => dispatch({ type: SET_ENGLISH_LANGUAGE })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagePicker);
