import { SET_SERBIAN_LANGUAGE, SET_ENGLISH_LANGUAGE} from '../actions';

const initialState = {
   language: 'sr'
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_SERBIAN_LANGUAGE:
         return {
            ...state,
            language: 'sr'
         };

      case SET_ENGLISH_LANGUAGE:
         return {
            ...state,
            language: 'en'
         };
   
      default:
         return state;
   }
}