import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './utils/serviceWorker';
import App from './App';
import store from './store/configureStore';
import './assets/styles/index.css';
import LanguageContextProvider from './contexts/LanguageContext';

const app = (
   <Provider store={store}>
      <LanguageContextProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>   
      </LanguageContextProvider>
   </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();