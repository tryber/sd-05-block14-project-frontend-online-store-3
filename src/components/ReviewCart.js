import React from 'react';

class ReviewCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: '',  
      resumo: '',
    };
  }

  componentDidMount() {
    this.agrupador();
  }

  getCart() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho === null) return this.setState({ cart: 0 });
    return this.setState({ cart: carrinho });
  }

  agrupador() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    const resumo = [];
    carrinho.forEach(item => {
      if (resumo.find(procurado => procurado.id === item.id)) {
        resumo.forEach((repetido, index) => {
          if (repetido.id === item.id) {
            resumo[index].quantity += 1;
          };
        });
      } else {
        item.quantity = 1;
        resumo.push(item);
      };
    });
    this.setState({ resumo });
    return resumo;
  }

  render() {
    if (this.state.resumo === '') return <h2>vazio</h2>;
    return (
      <div>
        <div>
        {this.state.resumo.map((product) => (
          <div key={product.id}>
            <p data-testid="shopping-cart-product-name">{product.title}</p>
            <img src={product.thumbnail} alt={product.title} />
            <p data-testid="shopping-cart-product-quantity">Quantidade:{product.quantity}</p>
            <p> R${parseInt(product.quantity*product.price*100)/100}</p>
          </div>
        ))}
        </div>
        <p>Total:{this.state.resumo.reduce((total, atual) =>
          total + atual.price * atual.quantity, 0
        )}</p>
      </div>
    );
  }
}

export default ReviewCart;
