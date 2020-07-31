import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: 0 };
  }

  componentDidMount() {
    this.getCart();
  }

  getCart() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho === null) return this.setState({ cart: 0 });
    return this.setState({ cart: carrinho });
  }

  render() {
    if (this.state.cart === 0) {
      return (
        <div>
          <Link to="/">Home</Link>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        <Link to="/">Home</Link>
        {this.state.cart.map((product) => (
          <div key={product.id}>
            <p data-testid="shopping-cart-product-name">{product.title}</p>
            <img src={product.thumbnail} alt={product.title} />
            <p data-testid="shopping-cart-product-quantity">R$1</p>
          </div>
        ))}
        <Link data-testid="checkout-products" to="/checkout">Finalizar Compra</Link>
      </div>
    );
  }
}

export default ShoppingCart;
