import React from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import Loading from './component/Loading';
import Modal from './component/Modal/Modal';
import Products from './component/Products/Products';

function App(props) {
  return (
    <div className="App">
        <header>
          <div className="header-left">
            <button><i class="fas fa-bars"></i></button>
            <h1>PURPLE STORE</h1>
          </div>
          <div className="header_right">
            <button><i class="fas fa-shopping-cart"></i></button>
          </div>
        </header>

      <Switch>

        {/* 상품 리스트 */}
        <Route path="/">
          <Loading />

          <Products />
          {
            props.modal === true
              ? <Modal />
              : null
          }
          {/* <Modal /> */}
        </Route>

        

          {/* 장바구니 */}
        <Route path="/cart-items"></Route>

        

      </Switch>
    </div>
  );
}

function productProps(state) {
  return {
      state: state.reducer,
      modal: state.reducer2
  }
}
export default connect(productProps)(App);


