import { put, takeLatest } from 'redux-saga/effects';

import { 
   GET_PERSONS_REDUCER,
   GET_PERSONS_SAGA,
   ADD_PERSON_REDUCER,
   ADD_PERSON_SAGA,
   DO_SOMETHING
} from '../actions';



function* getPersons() {
   try {
      yield put({type: GET_PERSONS_REDUCER});

   } catch (error) {      
      console.log('error saga getPersons');
   }
}

function* addPerson(action) {
   try {
      console.log('addPersonSaga', action);
      yield put({type: ADD_PERSON_REDUCER, payload: action.payload});
      console.log('success ?');
      
   } catch (error) {
      console.log('error in addPerson Saga');
   }
}

function* doSomething() {   
   yield put({type: 'adas'});
   alert('doSomething saga');
   return true;
}

export default function* rootSaga() {
   yield takeLatest(GET_PERSONS_SAGA, getPersons);
   yield takeLatest(ADD_PERSON_SAGA, addPerson);
   yield takeLatest(DO_SOMETHING, doSomething);
}
