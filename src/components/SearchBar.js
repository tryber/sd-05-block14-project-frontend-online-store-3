import React from 'react';
// import getProductsFromCategoryAndQuery from '../services/api';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { busca: '' };
  };

  render() {
    return (
      <div>
        <input data-testid="query-input" placeholder="Faça sua busca" />
        <button data-testid="query-button" type="button">Buscar</button>
      </div>
    );
  }
}

export default SearchBar;
