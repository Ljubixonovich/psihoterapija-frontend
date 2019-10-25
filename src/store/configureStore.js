import { createStore,  compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { PersonReducer, UIReducer } from './reducers/';
import rootSaga from './sagas';


const rootReducer = combineReducers({
   persons: PersonReducer,
   ui: UIReducer
});


const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
   return createStore(rootReducer,
      compose(applyMiddleware(sagaMiddleware)))
};

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;

