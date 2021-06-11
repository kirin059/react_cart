import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import Loading from './component/Loading';
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

          <Products  />

          
        </Route>

          {/* 장바구니 */}
        <Route path="/cart-items"></Route>

        

      </Switch>
    </div>
  );
}

export default App;


