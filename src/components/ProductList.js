import React from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import Categories from './Categories';

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
    this.searchCategories = this.searchCategories.bind(this);
  }

  componentDidMount() {
    this.getCart();
  }

  getCart() {
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

  searchCategories(cat) {
    this.setState({ categoryId: cat.id });
    if (!this.state.query) {
      api.getProductsFromCategoryAndQuery(cat.id).then((data) => {
        this.setState({ results: data.results });
      });
    }
  }

  render() {
    const { results } = this.state;
    if (!results) {
      return (
        <div>
          <div>
            <SearchBar onClick={this.handleClick} />
          </div>
          <p>Nenhum produto foi encontrado</p>
        </div>
      );
    }
    return (
      <div className="home">
        <Categories onClick={this.searchCategories} />
        <div className="right-content">
          <div className="search-content">
            <SearchBar onClick={this.handleClick} />
          </div>
          <div className="product-list">
            {results.map((product) =>
              <ProductCard product={product} key={product.id} onClick={this.addToCart} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
