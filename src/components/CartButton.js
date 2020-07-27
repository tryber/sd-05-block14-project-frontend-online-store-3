import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <div data-testid="shopping-cart-button">
        <Link to='/shopping-cart'>Cart</Link>
      </div>
    );
  };
}

export default CartButton;
