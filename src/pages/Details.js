import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`https://api.mercadolibre.com/items/${id}`).then((data) => data.json())
      .then((result) => this.setState({ product: result }));
    this.getCart();
  }

  getCart() {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (cart) return this.setState({ fullCart: cart });
    return this.setState({ fullCart: [] });
  }

  addToCart(product) {
    const cart = this.state.fullCart;
    cart.push(product);
    this.setState({ fullCart: cart });
    localStorage.setItem('carrinho', JSON.stringify(this.state.fullCart));
  }

  render() {
    const { product } = this.state;
    return product ? (
      <div>
        <div data-testid="product-detail-name">{product.title}</div>
        <img src={product.thumbnail} alt="Produto" />
        <p>R${product.price}</p>
        <textarea data-testid="product-detail-evaluation" />
        <button
          data-testid="product-detail-add-to-cart"
          onClick={() => this.addToCart(product)}
        >
          Adicionar ao Carrinho
        </button>
        <CartButton />
        <Link to="/">Back</Link>
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}

export default Details;

