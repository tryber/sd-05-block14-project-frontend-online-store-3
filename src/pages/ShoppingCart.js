import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0,
    }
  }

  render() {
    if (this.state.cart === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    }
    return (
      <div>
        <p data-testid="shopping-cart-product-name"></p>
        <p data-testid="shopping-cart-product-quantity"></p>
      </div>
    );
  }
}

export default ShoppingCart;
