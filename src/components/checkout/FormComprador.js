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
  }
  // atdados função que atualiza dados
  atdad(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }))
  }

  render() {
    return (
      <form name="formComprador" method="get">
        <h1>Informações do Comprador</h1>
        {inputDataString.map((input, index) => {
          return (
            <InputText
              dataTestId={input.dataTestId}
              value={this.state[input.name]}
              key={index}
              name={input.name}
              onChange={this.atdad}
            />
          );
        })}
        {inputDataNumber.map((input, index) => {
          return (
            <InputNumber
              dataTestId={input.dataTestId} 
              value={this.state[input.name]}
              key={index}
              name={input.name}
              onChange={this.atdad}
            />
          )
        })}
      </form>
    );
  }
}

export default FormComprador;
