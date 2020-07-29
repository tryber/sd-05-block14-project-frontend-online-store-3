import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Cart</Link>
      </div>
    );
  }
}

export default CartButton;
