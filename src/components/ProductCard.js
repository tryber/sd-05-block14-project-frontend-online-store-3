import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <Link to={`/details/${product.id}`} data-testid="product-detail-link">
          <p>{product.title}</p>
          <img src={product.thumbnail} alt={product.title} />
          <p>R$ {product.price}</p>
        </Link>
        <button data-testid="product-add-to-cart" onClick={() => console.log('clicou aqui')}>
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default ProductCard;
