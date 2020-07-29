import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busca: '',
      results: [],
    };
  }

  render() {
    return (
      <div>
        <input
          onChange={(event) => this.setState({ busca: event.target.value })}
          data-testid="query-input"
          placeholder="Faça sua busca"
        />
        <button
          onClick={() => this.props.onClick(this.state.busca)}
          data-testid="query-button"
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default SearchBar;
