import React from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      query: '',
      results: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(busca) {
    await api.getProductsFromCategoryAndQuery(this.state.categoryId, busca).then((data) => {
      this.setState({ results: data.results, query: busca })
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <div>
          <SearchBar onClick={this.handleClick} />
        </div>
        <div className="product-list">
          {results.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </div>
    );
  }
}

export default ProductList;
