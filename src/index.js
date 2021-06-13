import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Data from './Data';
//import { store } from './redux/store';

// product reducer
let productState = Data;

function reducer(state = productState, action) {

    return state
}

// modal reducer
let modalState = false;

function reducer2(state = modalState, action) {
  console.log(state)
  if (action.type === 'modalClose') {
    state = false;
    return state;
  }
  else if (action.type === 'modalOpen') {
    state = true;
    return state;
  }
  else {
    return state;
  }
}

const store = createStore(combineReducers({reducer, reducer2}) );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
