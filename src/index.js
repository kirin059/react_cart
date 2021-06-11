import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
//import { store } from './redux/store';

let productState = [
  { img: "https://cdn.purplesto.re/media/store/sale/main_image/ziwipeak_dog_B046DF36_thumb01.png", info: '에어드라이 오타고밸리', weight: '900g', price: '100원'},
  { img: "https://cdn.purplesto.re/media/store/sale/main_image/ziwipeak_dog_B046DF36_thumb01.png", info: '에어드라이 오타고밸리', weight: '900g', price: '100원' },
  { img: "https://cdn.purplesto.re/media/store/sale/main_image/ziwipeak_dog_B046DF36_thumb01.png", info: '에어드라이 오타고밸리', weight: '900g', price: '100원' },
  { img: "https://cdn.purplesto.re/media/store/sale/main_image/ziwipeak_dog_B046DF36_thumb01.png", info: '에어드라이 오타고밸리', weight: '900g', price: '100원' },
  { img: "https://cdn.purplesto.re/media/store/sale/main_image/ziwipeak_dog_B046DF36_thumb01.png", info: '에어드라이 오타고밸리', weight: '900g', price: '100원' },
  { img: "https://cdn.purplesto.re/media/store/sale/main_image/ziwipeak_dog_B046DF36_thumb01.png", info: '에어드라이 오타고밸리', weight: '900g', price: '100원' }
];

function reducer(state = productState, action) {
  console.log(state)
    return state
}

let modalState = false;

function reducer2(state = modalState, action) {
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
