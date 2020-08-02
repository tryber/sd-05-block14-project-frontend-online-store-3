import React from 'react';
import Estados from '../checkout/estados';
import InputData from '../checkout/InputData';
import InputText from '../checkout/InputText';
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
      <div>
        <form name="formComprador" method="get">
          <h1>Informações do Comprador</h1>
            {InputData.map((input, index) => {
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
          <select onChange={this.atdad}>
            {Estados.map((estado) => <option key={estado}>{estado}</option>)}
          </select>
        </form>
      </div>
    );
  }
}

export default FormComprador;
