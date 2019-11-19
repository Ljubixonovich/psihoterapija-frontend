import { put, takeLatest } from 'redux-saga/effects';

import { 
   DO_SOMETHING,
   SET_ENGLISH_LANGUAGE_SAGA,
   SET_SERBIAN_LANGUAGE_SAGA,
   SET_ENGLISH_LANGUAGE_REDUCER,
   SET_SERBIAN_LANGUAGE_REDUCER
} from '../actions';

function* setSerbianLanguage() {
   try {
      yield put({type: SET_SERBIAN_LANGUAGE_REDUCER});

   } catch (error) {      
      console.log('error saga setSerbianLanguage');
   }
}

function* setEnglishLanguage() {
   try {
      yield put({type: SET_ENGLISH_LANGUAGE_REDUCER});

   } catch (error) {      
      console.log('error saga setEnglishLanguage');
   }
}

function* doSomething() {   
   yield put({type: 'adas'});
   alert('doSomething saga');
   return true;
}

export default function* rootSaga() {
   yield takeLatest(DO_SOMETHING, doSomething);
   yield takeLatest(SET_ENGLISH_LANGUAGE_SAGA, setEnglishLanguage);
   yield takeLatest(SET_SERBIAN_LANGUAGE_SAGA, setSerbianLanguage);
}
