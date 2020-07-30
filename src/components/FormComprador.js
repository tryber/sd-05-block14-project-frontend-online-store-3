import React from 'react';
import Estados from './estados';
// refazendo climate
class FormComprador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeCompleto: '',
      CPF: '',
      email: '',
      telefone: '',
      CEP: '',
      endereco: '',
      complemento: '',
      numero: '',
      Cidade: ''
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
          <input data-testid={arr[0]} type="text" name="nomeCompleto" placeholder="Nome Completo" onChange={this.atdad} />
          <input data-testid={arr[1]} type="number" name="CPF" placeholder="CPF" onChange={this.atdad} />
          <input data-testid={arr[2]} type="email" name="email" placeholder="E-mail" onChange={this.atdad} />
          <input data-testid={arr[3]} type="number" name="telefone" placeholder="Telefone" onChange={this.atdad} />
          <input data-testid={arr[4]} type="number" name="CEP" placeholder="CEP" onChange={this.atdad} />
          <input data-testid={arr[5]} type="text" name="endereco" placeholder="Endereço" onChange={this.atdad} />
          <input type="text" name="complemento" placeholder="Complemento" onChange={this.atdad} />
          <input type="number" name="numero" placeholder="Número" onChange={this.atdad} />
          <input type="text" name="Cidade" placeholder="Cidade" onChange={this.atdad} />
          <select onChange={this.atdad}>
            {Estados.map((estado) => <option>{estado}</option>)}
          </select>
        </form>
      </div>
    );
  }
}

export default FormComprador;
