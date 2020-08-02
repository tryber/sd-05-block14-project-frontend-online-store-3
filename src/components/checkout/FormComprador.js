import React from 'react';
// import Estados from '../checkout/estados';
import inputDataString from './InputDataString';
import inputDataNumber from './InputDataExtra';
import InputText from '../checkout/InputText';
import InputNumber from './InputTextExtra';
// refazendo climate
class FormComprador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: '',
      CPF: '',
      Email: '',
      Telefone: '',
      CEP: '',
      Endereco: '',
    };
    this.atdad = this.atdad.bind(this);
    this.cadastro = this.cadastro.bind(this);
    this.cadastro2 = this.cadastro2.bind(this);
  }
  // atdados função que atualiza dados
  atdad(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }


  cadastro() {
    return inputDataString.map((input) => {
      return (
        <InputText
          dataTestId={input.dataTestId}
          value={this.state[input.name]}
          key={input.name}
          name={input.name}
          onChange={this.atdad}
        />
      );
    })
  }

cadastro2() {
    return inputDataNumber.map((input) => {
      return (
        <InputNumber
          dataTestId={input.dataTestId}
          value={this.state[input.name]}
          key={input.name}
          name={input.name}
          onChange={this.atdad}
        />
      );
    })
  }

  render() {
    return (
      <form name="formComprador" method="get">
        <h1>Informações do Comprador</h1>
        {this.cadastro()}
        {this.cadastro2()}
      </form>
    );
  }
}

export default FormComprador;
