import React from 'react';

class ProductList extends React.Component {
  render() {
    const { results } = this.props;
    return (
      <div className="product-list">
        {results.map((product) => {
          return (
            <div data-testid="product" className="product-card" key={product.id}>
              <p>{product.title}</p>
              <img src={product.thumbnail} alt={product.title}/>
              <p>{product.price}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default ProductList;
