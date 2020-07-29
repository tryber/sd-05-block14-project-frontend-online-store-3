import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  componentDidMount() {
    const { match: { params: { id } }
    } = this.props;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((data) => data.json())
      .then((result) => this.setState({ product: result }));
  }

  render() {
    const { product } = this.state;
    return product ? (
      <div>
        <div data-testid="product-detail-name">{product.title}</div>
        <img src={product.thumbnail} alt="Produto" />
        <p>R${product.price}</p>
        <textarea data-testid="product-detail-evaluation" />
        <CartButton />
        <Link to="/">Back</Link>
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}

export default Details;
