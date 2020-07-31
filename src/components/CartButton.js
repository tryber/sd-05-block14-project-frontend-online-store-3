import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img 
            src="https://image.flaticon.com/icons/png/512/263/263142.png"
            alt="cart button icon"
            style={{ padding: '20px', width: '40px' }}
          />
        </Link>
      </div>
    );
  }
}

export default CartButton;
