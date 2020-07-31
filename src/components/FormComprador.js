import React from 'react';
import Estados from './estados';
// refazendo climate
class FormComprador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      CPF: '',
      email: '',
      telefone: '',
      CEP: '',
      endereco: '',
      complemento: '',
      numero: '',
      Cidade: '',
    };
    this.atdad = this.atdad.bind(this);
  }
  // atdados função que atualiza dados
  atdad(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    // variavel array que contem os nomes para diminuir o tamanho do input
    const arr = ['checkout-fullname', 'checkout-cpf', 'checkout-email', 'checkout-phone', 'checkout-cep', 'checkout-address'];
    return (
      <div>
        <form name="formComprador" method="get">
          <h1>Informações do Comprador</h1>
          <input data-testid={arr[0]} type="text" placeholder="Nome" onChange={this.atdad} />
          <input data-testid={arr[1]} type="number" placeholder="CPF" onChange={this.atdad} />
          <input data-testid={arr[2]} type="email" placeholder="email" onChange={this.atdad} />
          <input data-testid={arr[3]} type="number" placeholder="Tel" onChange={this.atdad} />
          <input data-testid={arr[4]} type="number" placeholder="CEP" onChange={this.atdad} />
          <input data-testid={arr[5]} type="text" placeholder="End." onChange={this.atdad} />
          <input type="text" placeholder="Complemento" onChange={this.atdad} />
          <input type="number" placeholder="Número" onChange={this.atdad} />
          <input type="text" placeholder="Cidade" onChange={this.atdad} />
          <select onChange={this.atdad}>
            {Estados.map((estado) => <option>{estado}</option>)}
          </select>
        </form>
      </div>
    );
  }
}

export default FormComprador;
