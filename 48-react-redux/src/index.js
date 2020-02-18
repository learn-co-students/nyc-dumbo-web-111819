import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import {createStore} from 'redux';
import toysReducer from './Redux/toysReducer'
import {Provider} from 'react-redux'

let storeObj = createStore( toysReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )


ReactDOM.render(
  <Provider store={ storeObj }>
    <App />
  </Provider>,
document.getElementById('root'));
