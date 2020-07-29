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
      selected: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (cart) this.setState({ selected: cart });
  }

  async handleClick(busca) {
    await api.getProductsFromCategoryAndQuery(this.state.categoryId, busca).then((data) => {
      this.setState({ results: data.results, query: busca })
    });
  }

  addToCart(product) {
    const selectedProd = this.state.selected;
    selectedProd.push(product);
    this.setState({ selected: selectedProd });
    localStorage.setItem('carrinho', JSON.stringify(this.state.selected));
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <div>
          <SearchBar onClick={this.handleClick} />
        </div>
        <div className="product-list">
          {results.map((product) => <ProductCard product={product} key={product.id} onClick={this.addToCart} />)}
        </div>
      </div>
    );
  }
}

export default ProductList;
