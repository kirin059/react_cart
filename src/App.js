import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Products from './component/Products/Products';

function App() {
  return (
    <div className="App">

      <Switch>
        {/* 상품 리스트 */}
        <Route path="/">
          <Products />
        </Route>

          {/* 장바구니 */}
        <Route path="/cart-items"></Route>

        

      </Switch>
    </div>
  );
}

export default App;
