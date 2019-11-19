import { SET_SERBIAN_LANGUAGE_REDUCER, SET_ENGLISH_LANGUAGE_REDUCER} from '../actions';

const initialState = {
   language: 'en'
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_SERBIAN_LANGUAGE_REDUCER:
         return {
            ...state,
            language: 'sr'
         };

      case SET_ENGLISH_LANGUAGE_REDUCER:
         return {
            ...state,
            language: 'en'
         };
   
      default:
         return state;
   }
}