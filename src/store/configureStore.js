import { createStore,  compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { PersonReducer, UIReducer, LanguageReducer } from './reducers/';
import rootSaga from './sagas';


const rootReducer = combineReducers({
   persons: PersonReducer,
   ui: UIReducer,
   language: LanguageReducer
});


const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
   return createStore(rootReducer,
      compose(applyMiddleware(sagaMiddleware)))
};

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;

