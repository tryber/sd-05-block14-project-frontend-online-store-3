import React from 'react';
import CartButton from '../components/CartButton';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home">
          <div className="right-content">
            <div className="search-content">
              <ProductList />
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            </div>
            <CartButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
