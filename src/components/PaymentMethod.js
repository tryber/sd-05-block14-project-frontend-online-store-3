import React from 'react';
import RadioInput from './RadioInput';
import formasDePagar from './PaymentData';

class PaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = { payMethod: 'boleto' };
    this.stateUpdate = this.stateUpdate.bind(this);
  }

  stateUpdate(event) {
    const { value } = event.target;
    return this.setState(() => ({ payMethod: value }));
  }

  render() {
    const { payMethod } = this.state;
    return (
      <div style={{ border: '3px solid black' }}>
        <h2>Opções de pagamento:</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {formasDePagar.map((card) => (
            <RadioInput
              key={card.value}
              value={card.value}
              escolhido={payMethod}
              onChange={this.stateUpdate}
              imagePath={card.imagePath}
              imgEInput={card.imgEInput}
            />
          ))
        }
        </div>
      </div>
    );
  }
}

export default PaymentMethod;
