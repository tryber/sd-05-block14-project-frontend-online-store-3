import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      busca: '',
      results: [],
    };
    this.buscaProduto = this.buscaProduto.bind(this);
  }

  buscaProduto() {
    getProductsFromCategoryAndQuery(false, this.state.busca).then((data) => {
      this.setState({
        results: data.results,
      });
      console.log(data);
    });
  }
  

  /*buscaProduto() {
    const { onClick } =this.props;
    const { busca } =this.state;
    if (onClick) 
    return busca;
  }*/

  render() {
    // const { onClick } = this.props;
    // const { busca } = this.state;
    return (
      <div>
        <input
          // gogo={this.buscaProduto}
          onChange={(event) => this.setState({ busca: event.target.value })}
          data-testid="query-input"
          placeholder="Faça sua busca"
        />
        <button onClick={this.buscaProduto} data-testid="query-button" type="button">
        {/*<button onClick={() => onClick(busca)} data-testid="query-button" type="button">*/}
          Pesquisar
        </button>
        <ProductList results={this.state.results} />
      </div>
    );
  }
}

export default SearchBar;
