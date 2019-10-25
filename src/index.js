import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './utils/serviceWorker';
import App from './App';
import store from './store/configureStore';
import './assets/styles/index.css';

const app = (
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>   
   </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();