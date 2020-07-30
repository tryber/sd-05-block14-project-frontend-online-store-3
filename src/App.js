import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Details from './pages/Details';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/details/:id" component={Details} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
