import React from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CartButton />
        <Categories />
      </div>
    );
  }
}

export default Home;
