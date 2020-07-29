import React from 'react';

class FormComprador extends React.Component {
  render() {
    return (
      <div>
        <form name="formComprador" method="get">
          <h1>Informações do Comprador</h1>

          <input className="formulario" data-testid="checkout-fullname" type="text" name="nomeCompleto" placeholder="Nome Completo" required="required" />
              
          <input className="formulario" data-testid="checkout-cpf" type="number" name="CPF" placeholder="CPF" required="required" />

          <input className="formulario" data-testid="checkout-email" type="email" name="email" placeholder="E-mail" required="required" />

          <input className="formulario" data-testid="checkout-phone" type="tel" name="telefone" placeholder="Telefone" required="required" />

          <input className="formulario" data-testid="checkout-cep" type="number" name="CEP" placeholder="CEP" required="required" />

          <input className="formulario" data-testid="checkout-address" type="text" name="endereco" placeholder="Endereço" required="required" />

          <input className="formulario" type="text" name="complemento" placeholder="Complemento" />

          <input className="formulario" type="number" name="numero" placeholder="Número" required="required" />

          <input className="formulario" type="text" name="Cidade" placeholder="Cidade" required="required" />

          <select className="formulario" required="required">

            <option>AC</option>
            <option>AL</option>
            <option>AP</option>
            <option>AM</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MT</option>
            <option>MS</option>
            <option>MG</option>
            <option>PA</option>
            <option>PB</option>
            <option>PR</option>
            <option>PE</option>
            <option>PI</option>
            <option>RJ</option>
            <option>RN</option>
            <option>RS</option>
            <option>RO</option>
            <option>RR</option>
            <option>SC</option>
            <option>SP</option>
            <option>SE</option>
            <option>TO</option>

          </select>

        </form>
      </div>
    );
  }
}

export default FormComprador;
