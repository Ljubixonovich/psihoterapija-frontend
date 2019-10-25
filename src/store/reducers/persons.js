import { 
   ADD_PERSON_REDUCER, 
   // DELETE_PERSON_REDUCER, 
   // EDIT_PERSON_REDUCER, 
   GET_PERSONS_REDUCER } 
from '../actions';


const PersonsState = {
   persons: []
};

export const reducer = (state = PersonsState, action) => { 
   switch (action.type) {
      case GET_PERSONS_REDUCER:
         if (state.persons.length > 0) {
            return {
                ...state                
            }
         } else {
            return {
               ...state,
               persons: state.persons
            }
         }


      case ADD_PERSON_REDUCER:
         const newPersons = [...state.persons, action.payload];        
         return {
            ...state,
            persons: newPersons
         }

      default:
         return state;
   }
}